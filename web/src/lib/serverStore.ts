import fs from 'fs';
import path from 'path';
import { supabase, isSupabaseConfigured } from './supabase';
import { pool, isMySQLConfigured } from './mysql';
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

function parseJsonSafe(val: any) {
  if (!val) return undefined;
  if (typeof val === 'object') return val;
  try {
    return JSON.parse(val);
  } catch {
    return undefined;
  }
}

export async function getWorkflowById(id: string): Promise<Workflow | null> {
  // 1. Prioritas Utama: MySQL (Laragon / Hostinger)
  if (isMySQLConfigured && pool) {
    try {
      const [wRows]: any = await pool.execute('SELECT * FROM workflows WHERE id = ?', [id]);
      if (!wRows || wRows.length === 0) return null;
      const wf = wRows[0];

      const [sRows]: any = await pool.execute(
        'SELECT * FROM steps WHERE workflow_id = ? ORDER BY order_index ASC',
        [id]
      );

      return {
        id: wf.id,
        title: wf.title,
        description: wf.description || '',
        category: wf.category || 'General SOP',
        createdAt: new Date(wf.created_at).getTime(),
        updatedAt: new Date(wf.updated_at).getTime(),
        targetUrl: wf.target_url || '',
        author: wf.author || 'Tim Perusahaan',
        steps: (sRows || []).map((s: any) => ({
          id: s.id,
          order: s.order_index,
          actionType: s.action_type,
          title: s.title,
          description: s.description || '',
          url: s.url || '',
          pageTitle: s.page_title || '',
          screenshot: s.screenshot_url,
          annotatedScreenshot: s.screenshot_url,
          highlight: parseJsonSafe(s.highlight_json),
          callout: parseJsonSafe(s.callout_json),
          blurRegions: parseJsonSafe(s.blur_regions_json),
          arrows: parseJsonSafe(s.arrows_json) || []
        }))
      };
    } catch (err) {
      console.error('MySQL getWorkflowById error:', err);
    }
  }

  // 2. Fallback: Supabase
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
      category: wf.category || 'General SOP',
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

  // 3. Fallback: File JSON Lokal
  const list = readLocalWorkflows();
  return list.find((w) => w.id === id) || null;
}

export async function getAllWorkflows(): Promise<Workflow[]> {
  // 1. Prioritas Utama: MySQL
  if (isMySQLConfigured && pool) {
    try {
      const [rows]: any = await pool.execute(
        `SELECT w.*, (SELECT COUNT(*) FROM steps s WHERE s.workflow_id = w.id) as step_count 
         FROM workflows w 
         ORDER BY w.created_at DESC`
      );

      return (rows || []).map((w: any) => ({
        id: w.id,
        title: w.title,
        description: w.description || '',
        category: w.category || 'General SOP',
        createdAt: new Date(w.created_at).getTime(),
        updatedAt: new Date(w.updated_at).getTime(),
        targetUrl: w.target_url || '',
        author: w.author,
        steps: new Array(Number(w.step_count) || 0)
      }));
    } catch (err) {
      console.error('MySQL getAllWorkflows error:', err);
    }
  }

  // 2. Fallback: Supabase
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
      category: w.category || 'General SOP',
      createdAt: new Date(w.created_at).getTime(),
      updatedAt: new Date(w.updated_at).getTime(),
      targetUrl: w.target_url || '',
      author: w.author,
      steps: new Array(w.steps?.[0]?.count || 0)
    }));
  }

  // 3. Fallback: File JSON Lokal
  const list = readLocalWorkflows();
  return list.sort((a, b) => b.createdAt - a.createdAt);
}

export async function deleteWorkflowFromCloud(id: string): Promise<boolean> {
  // 1. Prioritas Utama: MySQL
  if (isMySQLConfigured && pool) {
    await pool.execute('DELETE FROM workflows WHERE id = ?', [id]);
    return true;
  }

  // 2. Fallback: Supabase
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase.from('workflows').delete().eq('id', id);
    if (error) throw error;
    return true;
  }

  // 3. Fallback: File JSON Lokal
  const list = readLocalWorkflows();
  const filtered = list.filter((w) => w.id !== id);
  writeLocalWorkflows(filtered);
  return true;
}

export async function saveWorkflowToCloud(workflow: Workflow): Promise<{ success: boolean; id: string }> {
  // 1. Prioritas Utama: MySQL
  if (isMySQLConfigured && pool) {
    try {
      await pool.execute(
        `INSERT INTO workflows (id, title, description, category, target_url, author, updated_at) 
         VALUES (?, ?, ?, ?, ?, ?, NOW()) 
         ON DUPLICATE KEY UPDATE 
           title = VALUES(title), 
           description = VALUES(description), 
           category = VALUES(category), 
           target_url = VALUES(target_url), 
           author = VALUES(author), 
           updated_at = NOW()`,
        [
          workflow.id,
          workflow.title,
          workflow.description || '',
          workflow.category || 'General SOP',
          workflow.targetUrl || '',
          workflow.author || 'Tim Perusahaan'
        ]
      );

      if (workflow.steps && workflow.steps.length > 0) {
        await pool.execute('DELETE FROM steps WHERE workflow_id = ?', [workflow.id]);

        for (let idx = 0; idx < workflow.steps.length; idx++) {
          const st = workflow.steps[idx];
          await pool.execute(
            `INSERT INTO steps (id, workflow_id, order_index, action_type, title, description, url, page_title, screenshot_url, highlight_json, callout_json, blur_regions_json, arrows_json) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
              st.id,
              workflow.id,
              idx + 1,
              st.actionType || 'click',
              st.title || `Step ${idx + 1}`,
              st.description || '',
              st.url || '',
              st.pageTitle || '',
              st.annotatedScreenshot || st.screenshot || '',
              st.highlight ? JSON.stringify(st.highlight) : null,
              st.callout ? JSON.stringify(st.callout) : null,
              st.blurRegions ? JSON.stringify(st.blurRegions) : null,
              st.arrows ? JSON.stringify(st.arrows) : null
            ]
          );
        }
      }

      return { success: true, id: workflow.id };
    } catch (err) {
      console.error('MySQL saveWorkflowToCloud error:', err);
      throw err;
    }
  }

  // 2. Fallback: Supabase
  if (isSupabaseConfigured && supabase) {
    const { error: wfError } = await supabase.from('workflows').upsert({
      id: workflow.id,
      title: workflow.title,
      description: workflow.description,
      category: workflow.category || 'General SOP',
      target_url: workflow.targetUrl,
      author: workflow.author || 'Anonim',
      updated_at: new Date().toISOString()
    });

    if (wfError) throw wfError;

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

  // 3. Fallback: File JSON Lokal
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