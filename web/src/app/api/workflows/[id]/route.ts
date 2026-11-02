import { NextRequest, NextResponse } from 'next/server';
import { getWorkflowById, deleteWorkflowFromCloud, saveWorkflowToCloud } from '@/lib/serverStore';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-editor-pin'
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await deleteWorkflowFromCloud(params.id);
    return NextResponse.json({ success: true }, { headers: corsHeaders });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500, headers: corsHeaders });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await req.json();
    if (!data.id) data.id = params.id;
    await saveWorkflowToCloud(data);
    return NextResponse.json({ success: true, id: params.id }, { headers: corsHeaders });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500, headers: corsHeaders });
  }
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


