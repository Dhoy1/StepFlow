export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ViewportMeta {
  width: number;
  height: number;
  scrollX: number;
  scrollY: number;
  devicePixelRatio: number;
}

export interface TargetElementMeta {
  tagName: string;
  id?: string;
  className?: string;
  innerText?: string;
  placeholder?: string;
  ariaLabel?: string;
  selector?: string;
  rect: BoundingBox;
  viewport: ViewportMeta;
}

export interface BlurRegion extends BoundingBox {
  id: string;
}

export interface HighlightConfig extends BoundingBox {
  color: string;
  style: 'border' | 'spotlight' | 'dot';
}

export interface StepCallout {
  type: 'tip' | 'warning' | 'info' | 'none';
  text: string;
}

export interface Step {
  id: string;
  order: number;
  actionType: 'click' | 'input' | 'change' | 'navigation' | 'manual';
  title: string;
  description: string;
  url: string;
  pageTitle: string;
  targetElement?: TargetElementMeta;
  screenshot: string; // Base64 data URI of the captured tab
  annotatedScreenshot?: string; // Processed screenshot with spotlight / blur / box
  highlight?: HighlightConfig;
  blurRegions?: BlurRegion[];
  callout?: StepCallout;
}

export interface Workflow {
  id: string;
  title: string;
  description: string;
  createdAt: number;
  updatedAt: number;
  targetUrl: string;
  steps: Step[];
  author?: string;
  companyName?: string;
  logoUrl?: string;
}

export type RecordingStatus = 'idle' | 'recording' | 'paused';

export interface ExtensionMessage {
  type:
    | 'START_RECORDING'
    | 'PAUSE_RECORDING'
    | 'RESUME_RECORDING'
    | 'STOP_RECORDING'
    | 'DISCARD_RECORDING'
    | 'GET_STATUS'
    | 'RECORDING_STATUS_CHANGED'
    | 'CAPTURE_STEP'
    | 'STEP_CAPTURED'
    | 'OPEN_EDITOR';
  payload?: any;
}

