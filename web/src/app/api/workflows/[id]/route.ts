import { NextRequest, NextResponse } from 'next/server';
import { getWorkflowById } from '@/lib/serverStore';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const workflow = await getWorkflowById(params.id);
    if (!workflow) {
      return NextResponse.json(
        { error: 'Workflow not found' },
        { status: 404, headers: corsHeaders }
      );
    }
    return NextResponse.json(workflow, { headers: corsHeaders });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500, headers: corsHeaders });
  }
}

