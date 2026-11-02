import fs from 'fs';
import path from 'path';
import { supabase, isSupabaseConfigured } from './supabase';
import type { Workflow } from '../types';

const dataDir = path.join(process.cwd(), 'data');
const dataFile = path.join(dataDir, 'workflows.json');

function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]), 'utf-8');
  }
}

function readLocalWorkflows(): Workflow[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeLocalWorkflows(list: Workflow[]) {
  ensureDataFile();
  fs.writeFileSync(dataFile, JSON.stringify(list, null, 2), 'utf-8');
}

export async function getWorkflowById(id: string): Promise<Workflow | null> {
  if (isSupabaseConfigured && supabase) {
    const { data: wf, error } = await supabase
      .from('workflows')
      .select('*, steps(*)')
      .eq('id', id)
      .single();

    if (error || !wf) return null;

    return {
      id: wf.id,
      title: wf.title,
      description: wf.description || '',
      createdAt: new Date(wf.created_at).getTime(),
      updatedAt: new Date(wf.updated_at).getTime(),
      targetUrl: wf.target_url || '',
      author: wf.author,
      steps: (wf.steps || []).sort((a: any, b: any) => a.order_index - b.order_index).map((s: any) => ({
        id: s.id,
        order: s.order_index,
        actionType: s.action_type,
        title: s.title,
        description: s.description || '',
        url: s.url || '',
        pageTitle: s.page_title || '',
        screenshot: s.screenshot_url,
        annotatedScreenshot: s.screenshot_url,
        highlight: s.highlight,
        callout: s.callout,
        blurRegions: s.blur_regions,
        targetElement: s.target_element
      }))
    };
  }

  // Fallback: Local JSON Storage
  const list = readLocalWorkflows();
  return list.find((w) => w.id === id) || null;
}

export async function getAllWorkflows(): Promise<Workflow[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('workflows')
      .select('*, steps(count)')
      .order('created_at', { ascending: false });

    if (error || !data) return [];

    return data.map((w: any) => ({
      id: w.id,
      title: w.title,
      description: w.description || '',
      createdAt: new Date(w.created_at).getTime(),
      updatedAt: new Date(w.updated_at).getTime(),
      targetUrl: w.target_url || '',
      author: w.author,
      steps: new Array(w.steps?.[0]?.count || 0)
    }));
  }

  // Fallback: Local JSON Storage
  const list = readLocalWorkflows();
  return list.sort((a, b) => b.createdAt - a.createdAt);
}

export async function saveWorkflowToCloud(workflow: Workflow): Promise<{ success: boolean; id: string }> {
  if (isSupabaseConfigured && supabase) {
    // 1. Insert/Update Workflow
    const { error: wfError } = await supabase.from('workflows').upsert({
      id: workflow.id,
      title: workflow.title,
      description: workflow.description,
      target_url: workflow.targetUrl,
      author: workflow.author || 'Anonim',
      updated_at: new Date().toISOString()
    });

    if (wfError) throw wfError;

    // 2. Insert Steps
    if (workflow.steps && workflow.steps.length > 0) {
      const stepRows = workflow.steps.map((st, idx) => ({
        id: st.id,
        workflow_id: workflow.id,
        order_index: idx + 1,
        action_type: st.actionType,
        title: st.title,
        description: st.description,
        url: st.url,
        page_title: st.pageTitle,
        screenshot_url: st.annotatedScreenshot || st.screenshot,
        highlight: st.highlight,
        callout: st.callout,
        blur_regions: st.blurRegions,
        target_element: st.targetElement
      }));

      await supabase.from('steps').delete().eq('workflow_id', workflow.id);
      const { error: stepsError } = await supabase.from('steps').insert(stepRows);
      if (stepsError) throw stepsError;
    }

    return { success: true, id: workflow.id };
  }

  // Fallback: Local JSON Storage
  const list = readLocalWorkflows();
  const existingIdx = list.findIndex((w) => w.id === workflow.id);
  if (existingIdx >= 0) {
    list[existingIdx] = workflow;
  } else {
    list.unshift(workflow);
  }
  writeLocalWorkflows(list);

  return { success: true, id: workflow.id };
}

