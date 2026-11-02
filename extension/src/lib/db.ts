import Dexie, { type Table } from 'dexie';
import type { Workflow, Step } from '../types';

export class StepFlowDatabase extends Dexie {
  workflows!: Table<Workflow, string>;
  steps!: Table<Step, string>;

  constructor() {
    super('StepFlowDB');
    this.version(1).stores({
      workflows: 'id, title, createdAt, updatedAt',
      steps: 'id, order, actionType, url'
    });
  }
}

export const db = new StepFlowDatabase();

// Helper functions for easy database access
export async function saveWorkflow(workflow: Workflow): Promise<string> {
  await db.workflows.put(workflow);
  return workflow.id;
}

export async function getWorkflow(id: string): Promise<Workflow | undefined> {
  return await db.workflows.get(id);
}

export async function getAllWorkflows(): Promise<Workflow[]> {
  return await db.workflows.orderBy('createdAt').reverse().toArray();
}

export async function deleteWorkflow(id: string): Promise<void> {
  await db.workflows.delete(id);
}

export async function updateWorkflowSteps(id: string, steps: Step[]): Promise<void> {
  const workflow = await db.workflows.get(id);
  if (workflow) {
    workflow.steps = steps;
    workflow.updatedAt = Date.now();
    await db.workflows.put(workflow);
  }
}

