import React, { useRef, useEffect, useState } from 'react';
import {
  Square,
  Crop,
  EyeOff,
  RotateCcw,
  Check,
  X,
  Trash2,
  Move,
  ArrowUpRight
} from 'lucide-react';
import type { Step, BlurRegion, HighlightConfig, ArrowAnnotation } from '../types';

interface StepCanvasProps {
  step: Step;
  onUpdateStep: (updated: Partial<Step>) => void;
}

type ToolMode = 'none' | 'highlight' | 'crop' | 'blur' | 'arrow';
type HandleType = 'move' | 'nw' | 'ne' | 'se' | 'sw' | 'n' | 's' | 'e' | 'w';
type DragModeType = HandleType | 'new' | 'new-arrow' | 'arrow-start' | 'arrow-end' | 'arrow-move' | null;

const HIGHLIGHT_COLORS = [
  { name: 'Red', hex: '#EF4444' },
  { name: 'Orange', hex: '#FF5C35' },
  { name: 'Blue', hex: '#3B82F6' },
  { name: 'Green', hex: '#10B981' }
];

export const StepCanvas: React.FC<StepCanvasProps> = ({ step, onUpdateStep }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Default tool is 'none' so the cursor is standard arrow, not stuck on crosshair
  const [activeTool, setActiveTool] = useState<ToolMode>('none');
  const [selectedColor, setSelectedColor] = useState('#EF4444');
  
  // Selection states
  const [isBoxSelected, setIsBoxSelected] = useState(false);
  const [selectedArrowId, setSelectedArrowId] = useState<string | null>(null);

  // Dragging & Interaction State
  const [dragMode, setDragMode] = useState<DragModeType>(null);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [initialBox, setInitialBox] = useState<HighlightConfig | null>(null);
  const [currentBox, setCurrentBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [initialArrow, setInitialArrow] = useState<ArrowAnnotation | null>(null);
  const [currentArrow, setCurrentArrow] = useState<{ startX: number; startY: number; endX: number; endY: number } | null>(null);
  const [cropSelection, setCropSelection] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [hoverCursor, setHoverCursor] = useState<string>('default');

  const [imgLoaded, setImgLoaded] = useState(false);
  const imageObjRef = useRef<HTMLImageElement | null>(null);
  const stepIdRef = useRef(step.id);
  stepIdRef.current = step.id;

  // Load screenshot into memory safely
  useEffect(() => {
    let isCurrent = true;
    setImgLoaded(false);
    imageObjRef.current = null;
    setIsBoxSelected(false);
    setSelectedArrowId(null);
    setCropSelection(null);

    // Immediately clear canvas so no leftover image from previous step shows
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    const sourceImage = step.originalScreenshot || step.screenshot;
    if (!sourceImage) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = sourceImage;
    img.onload = () => {
      if (!isCurrent || stepIdRef.current !== step.id) return;
      imageObjRef.current = img;
      setImgLoaded(true);
      renderCanvasWithImg(img, step.id);
    };

    return () => {
      isCurrent = false;
    };
  }, [step.id, step.originalScreenshot, step.screenshot]);

  // Re-render when annotations, arrows, or selection change
  useEffect(() => {
    if (imgLoaded && imageObjRef.current && stepIdRef.current === step.id) {
      renderCanvasWithImg(imageObjRef.current, step.id);
    }
  }, [step.blurRegions, step.highlight, step.arrows, selectedColor, imgLoaded, isBoxSelected, selectedArrowId]);

  // Handle keyboard shortcut (Delete / Backspace to delete active highlight box or arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        const tag = (document.activeElement?.tagName || '').toLowerCase();
        if (tag !== 'input' && tag !== 'textarea') {
          if (selectedArrowId) {
            handleDeleteArrow();
          } else if (step.highlight && isBoxSelected) {
            handleDeleteHighlight();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step.highlight, isBoxSelected, selectedArrowId, step.arrows]);

  const renderCanvas = () => {
    if (imgLoaded && imageObjRef.current && stepIdRef.current === step.id) {
      renderCanvasWithImg(imageObjRef.current, step.id);
    }
  };

  const renderCanvasWithImg = (img: HTMLImageElement, forStepId: string) => {
    const canvas = canvasRef.current;
    if (!canvas || !img || stepIdRef.current !== forStepId) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;

    // 1. Draw base screenshot
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // 2. Draw Blur / Redaction Regions
    if (step.blurRegions && step.blurRegions.length > 0) {
      for (const region of step.blurRegions) {
        applyPixelateOrBlur(ctx, region.x, region.y, region.width, region.height);
      }
    }

    // 3. Draw Highlight Box (Clean solid red stroke, NO shadowBlur, NO fill/gradient)
    if (step.highlight && step.highlight.width > 0) {
      const h = step.highlight;
      const boxColor = h.color || selectedColor;

      ctx.save();
      ctx.shadowBlur = 0; // Pure clean solid border, no glow
      ctx.strokeStyle = boxColor;
      ctx.lineWidth = Math.max(3, Math.round(canvas.width * 0.003));

      // Draw clean rounded rectangle
      drawRoundedRect(ctx, h.x, h.y, h.width, h.height, 4);
      ctx.stroke();
      ctx.restore();
    }

    // 4. Draw Arrows (Clean solid arrows pointing to target)
    if (step.arrows && step.arrows.length > 0) {
      for (const arrow of step.arrows) {
        drawArrow(
          ctx,
          arrow.startX,
          arrow.startY,
          arrow.endX,
          arrow.endY,
          arrow.color || selectedColor
        );
      }
    }

    // 5. BAKE ANNOTATED SCREENSHOT HERE (100% CLEAN - NO RESIZE HANDLES/DOTS IN PPT/PDF/DOCX!)
    if (stepIdRef.current === forStepId) {
      const cleanAnnotatedUrl = canvas.toDataURL('image/png');
      if (step.annotatedScreenshot !== cleanAnnotatedUrl) {
        onUpdateStep({ annotatedScreenshot: cleanAnnotatedUrl });
      }
    }

    // 6. DRAW 8 RESIZE HANDLES ONLY WHEN BOX IS SELECTED FOR EDITING
    if (isBoxSelected && step.highlight && step.highlight.width > 0) {
      const h = step.highlight;
      const boxColor = h.color || selectedColor;
      drawResizeHandles(ctx, h.x, h.y, h.width, h.height, boxColor);
    }

    // 7. DRAW ARROW HANDLES ONLY WHEN ARROW IS SELECTED FOR EDITING
    if (selectedArrowId && step.arrows) {
      const selArrow = step.arrows.find((a) => a.id === selectedArrowId);
      if (selArrow) {
        drawArrowHandles(
          ctx,
          selArrow.startX,
          selArrow.startY,
          selArrow.endX,
          selArrow.endY,
          selArrow.color || selectedColor
        );
      }
    }
  };

  function drawRoundedRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    radius: number
  ) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + w - radius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
    ctx.lineTo(x + w, y + h - radius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
    ctx.lineTo(x + radius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  function drawResizeHandles(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    color: string
  ) {
    const handleRadius = Math.max(5, Math.round(w * 0.015));
    const points = [
      { x, y }, // nw
      { x: x + w / 2, y }, // n
      { x: x + w, y }, // ne
      { x: x + w, y: y + h / 2 }, // e
      { x: x + w, y: y + h }, // se
      { x: x + w / 2, y: y + h }, // s
      { x, y: y + h }, // sw
      { x, y: y + h / 2 } // w
    ];

    ctx.save();
    for (const pt of points) {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, handleRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = color;
      ctx.stroke();
    }
    ctx.restore();
  }

  // Draw clean, professional arrow with filled triangular arrowhead
  function drawArrow(
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: string
  ) {
    const dx = endX - startX;
    const dy = endY - startY;
    const len = Math.hypot(dx, dy);
    if (len < 6) return;

    const angle = Math.atan2(dy, dx);
    const lineWidth = Math.max(4, Math.round(ctx.canvas.width * 0.0035));
    const headLen = Math.max(18, Math.round(ctx.canvas.width * 0.016));
    const headAngle = Math.PI / 6; // 30 degrees

    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 1. Shaft from startX, startY to near arrowhead
    const shaftEndX = endX - headLen * 0.5 * Math.cos(angle);
    const shaftEndY = endY - headLen * 0.5 * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(shaftEndX, shaftEndY);
    ctx.stroke();

    // 2. Solid triangular arrowhead
    const x1 = endX - headLen * Math.cos(angle - headAngle);
    const y1 = endY - headLen * Math.sin(angle - headAngle);
    const x2 = endX - headLen * Math.cos(angle + headAngle);
    const y2 = endY - headLen * Math.sin(angle + headAngle);
    const notchX = endX - headLen * 0.65 * Math.cos(angle);
    const notchY = endY - headLen * 0.65 * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(endX, endY);
    ctx.lineTo(x1, y1);
    ctx.lineTo(notchX, notchY);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  // Draw handles for selected arrow (start and end points)
  function drawArrowHandles(
    ctx: CanvasRenderingContext2D,
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    color: string
  ) {
    const radius = Math.max(6, Math.round(ctx.canvas.width * 0.006));
    ctx.save();

    // Start point handle
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = color;
    ctx.stroke();

    // End point handle (arrowhead)
    ctx.beginPath();
    ctx.arc(endX, endY, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = color;
    ctx.stroke();

    ctx.restore();
  }

  // Calculate distance from point (px, py) to line segment (x1, y1) - (x2, y2)
  function distToSegment(px: number, py: number, x1: number, y1: number, x2: number, y2: number) {
    const l2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  }

  // Hit test for arrows
  function getArrowHitTest(
    x: number,
    y: number
  ): { type: 'arrow-start' | 'arrow-end' | 'arrow-move'; arrow: ArrowAnnotation } | null {
    if (!step.arrows || step.arrows.length === 0) return null;
    const tol = Math.max(14, Math.round((canvasRef.current?.width || 800) * 0.012));

    // First check handles of the currently selected arrow
    if (selectedArrowId) {
      const sel = step.arrows.find((a) => a.id === selectedArrowId);
      if (sel) {
        if (Math.hypot(x - sel.startX, y - sel.startY) <= tol) {
          return { type: 'arrow-start', arrow: sel };
        }
        if (Math.hypot(x - sel.endX, y - sel.endY) <= tol) {
          return { type: 'arrow-end', arrow: sel };
        }
      }
    }

    // Check hit on any arrow body / shaft
    for (const arrow of step.arrows) {
      const dist = distToSegment(x, y, arrow.startX, arrow.startY, arrow.endX, arrow.endY);
      if (dist <= tol) {
        return { type: 'arrow-move', arrow };
      }
    }

    return null;
  }

  function applyPixelateOrBlur(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) {
    if (w <= 0 || h <= 0) return;
    try {
      const sampleSize = 12;
      const imgData = ctx.getImageData(x, y, w, h);
      const data = imgData.data;

      for (let py = 0; py < h; py += sampleSize) {
        for (let px = 0; px < w; px += sampleSize) {
          const index = (py * w + px) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];

          for (let dy = 0; dy < sampleSize && py + dy < h; dy++) {
            for (let dx = 0; dx < sampleSize && px + dx < w; dx++) {
              const targetIdx = ((py + dy) * w + (px + dx)) * 4;
              data[targetIdx] = r;
              data[targetIdx + 1] = g;
              data[targetIdx + 2] = b;
            }
          }
        }
      }
      ctx.putImageData(imgData, x, y);

      ctx.strokeStyle = 'rgba(0,0,0,0.2)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, w, h);
    } catch (e) {
      console.warn('Pixelate failed:', e);
    }
  }

  // Hit test handles or inside highlight box
  function getHitTestTarget(x: number, y: number): HandleType | null {
    if (!step.highlight || step.highlight.width <= 0) return null;
    const h = step.highlight;
    const tol = Math.max(12, Math.round(h.width * 0.04));

    // Only test handles if box is already selected
    if (isBoxSelected) {
      if (Math.hypot(x - h.x, y - h.y) <= tol) return 'nw';
      if (Math.hypot(x - (h.x + h.width), y - h.y) <= tol) return 'ne';
      if (Math.hypot(x - (h.x + h.width), y - (h.y + h.height)) <= tol) return 'se';
      if (Math.hypot(x - h.x, y - (h.y + h.height)) <= tol) return 'sw';

      if (Math.hypot(x - (h.x + h.width / 2), y - h.y) <= tol) return 'n';
      if (Math.hypot(x - (h.x + h.width / 2), y - (h.y + h.height)) <= tol) return 's';
      if (Math.hypot(x - h.x, y - (h.y + h.height / 2)) <= tol) return 'w';
      if (Math.hypot(x - (h.x + h.width), y - (h.y + h.height / 2)) <= tol) return 'e';
    }

    // Check inside box for selection & move
    if (x >= h.x && x <= h.x + h.width && y >= h.y && y <= h.y + h.height) {
      return 'move';
    }

    return null;
  }

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = canvasRef.current.width / rect.width;
    const x = Math.round((e.clientX - rect.left) * scale);
    const y = Math.round((e.clientY - rect.top) * scale);

    // 1. Tool mode: crop or blur
    if (activeTool === 'crop' || activeTool === 'blur') {
      setDragMode('new');
      setStartPos({ x, y });
      setCurrentBox({ x, y, w: 0, h: 0 });
      return;
    }

    // 2. Tool mode: highlight box
    if (activeTool === 'highlight') {
      setDragMode('new');
      setStartPos({ x, y });
      setCurrentBox({ x, y, w: 0, h: 0 });
      return;
    }

    // 3. Tool mode: arrow
    if (activeTool === 'arrow') {
      setDragMode('new-arrow');
      setStartPos({ x, y });
      setCurrentArrow({ startX: x, startY: y, endX: x, endY: y });
      return;
    }

    // 4. In normal mode ('none'):
    // Check if clicked an arrow first
    const arrowHit = getArrowHitTest(x, y);
    if (arrowHit) {
      setSelectedArrowId(arrowHit.arrow.id);
      setIsBoxSelected(false);
      setDragMode(arrowHit.type);
      setStartPos({ x, y });
      setInitialArrow({ ...arrowHit.arrow });
      return;
    }

    // Check if clicked the highlight box
    const hit = getHitTestTarget(x, y);
    if (hit && step.highlight) {
      setIsBoxSelected(true);
      setSelectedArrowId(null);
      setDragMode(hit);
      setStartPos({ x, y });
      setInitialBox({ ...step.highlight });
    } else {
      // Clicked outside: deselect both box and arrow
      setIsBoxSelected(false);
      setSelectedArrowId(null);
      setDragMode(null);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = canvasRef.current.width / rect.width;
    const currentX = Math.round((e.clientX - rect.left) * scale);
    const currentY = Math.round((e.clientY - rect.top) * scale);

    // Not dragging: update cursor based on hover
    if (!dragMode || !startPos) {
      if (activeTool === 'crop' || activeTool === 'blur' || activeTool === 'highlight' || activeTool === 'arrow') {
        setHoverCursor('crosshair');
        return;
      }
      
      // Check arrow hover
      const arrowHit = getArrowHitTest(currentX, currentY);
      if (arrowHit) {
        if (arrowHit.type === 'arrow-start' || arrowHit.type === 'arrow-end') {
          setHoverCursor('crosshair');
        } else {
          setHoverCursor('move');
        }
        return;
      }

      // Check box hover
      const hit = getHitTestTarget(currentX, currentY);
      if (isBoxSelected) {
        if (hit === 'nw' || hit === 'se') setHoverCursor('nwse-resize');
        else if (hit === 'ne' || hit === 'sw') setHoverCursor('nesw-resize');
        else if (hit === 'n' || hit === 's') setHoverCursor('ns-resize');
        else if (hit === 'e' || hit === 'w') setHoverCursor('ew-resize');
        else if (hit === 'move') setHoverCursor('move');
        else setHoverCursor('default');
      } else {
        if (hit === 'move') setHoverCursor('pointer');
        else setHoverCursor('default');
      }
      return;
    }

    // Dragging: Handle Resize or Move
    const dx = currentX - startPos.x;
    const dy = currentY - startPos.y;

    if (dragMode === 'new-arrow') {
      setCurrentArrow({
        startX: startPos.x,
        startY: startPos.y,
        endX: currentX,
        endY: currentY
      });
      return;
    }

    if (dragMode === 'arrow-start' && initialArrow) {
      const updatedArrows = (step.arrows || []).map((a) =>
        a.id === initialArrow.id ? { ...a, startX: initialArrow.startX + dx, startY: initialArrow.startY + dy } : a
      );
      onUpdateStep({ arrows: updatedArrows });
      return;
    }

    if (dragMode === 'arrow-end' && initialArrow) {
      const updatedArrows = (step.arrows || []).map((a) =>
        a.id === initialArrow.id ? { ...a, endX: initialArrow.endX + dx, endY: initialArrow.endY + dy } : a
      );
      onUpdateStep({ arrows: updatedArrows });
      return;
    }

    if (dragMode === 'arrow-move' && initialArrow) {
      const updatedArrows = (step.arrows || []).map((a) =>
        a.id === initialArrow.id
          ? {
              ...a,
              startX: initialArrow.startX + dx,
              startY: initialArrow.startY + dy,
              endX: initialArrow.endX + dx,
              endY: initialArrow.endY + dy
            }
          : a
      );
      onUpdateStep({ arrows: updatedArrows });
      return;
    }

    if (dragMode === 'new') {
      const x = Math.min(startPos.x, currentX);
      const y = Math.min(startPos.y, currentY);
      const w = Math.abs(currentX - startPos.x);
      const h = Math.abs(currentY - startPos.y);
      setCurrentBox({ x, y, w, h });
    } else if (initialBox) {
      let { x, y, width, height } = initialBox;

      if (dragMode === 'move') {
        x += dx;
        y += dy;
      } else if (dragMode === 'se') {
        width = Math.max(20, initialBox.width + dx);
        height = Math.max(20, initialBox.height + dy);
      } else if (dragMode === 'e') {
        width = Math.max(20, initialBox.width + dx);
      } else if (dragMode === 's') {
        height = Math.max(20, initialBox.height + dy);
      } else if (dragMode === 'nw') {
        x = initialBox.x + dx;
        y = initialBox.y + dy;
        width = Math.max(20, initialBox.width - dx);
        height = Math.max(20, initialBox.height - dy);
      } else if (dragMode === 'ne') {
        y = initialBox.y + dy;
        width = Math.max(20, initialBox.width + dx);
        height = Math.max(20, initialBox.height - dy);
      } else if (dragMode === 'sw') {
        x = initialBox.x + dx;
        width = Math.max(20, initialBox.width - dx);
        height = Math.max(20, initialBox.height + dy);
      } else if (dragMode === 'n') {
        y = initialBox.y + dy;
        height = Math.max(20, initialBox.height - dy);
      } else if (dragMode === 'w') {
        x = initialBox.x + dx;
        width = Math.max(20, initialBox.width - dx);
      }

      onUpdateStep({
        highlight: {
          x: Math.round(x),
          y: Math.round(y),
          width: Math.round(width),
          height: Math.round(height),
          color: initialBox.color || selectedColor,
          style: 'border'
        }
      });
    }
  };

  const handleMouseUp = () => {
    if (!dragMode) return;

    if (dragMode === 'new-arrow' && currentArrow) {
      const dist = Math.hypot(currentArrow.endX - currentArrow.startX, currentArrow.endY - currentArrow.startY);
      if (dist >= 15) {
        const newArrow: ArrowAnnotation = {
          id: 'arrow_' + Date.now(),
          startX: currentArrow.startX,
          startY: currentArrow.startY,
          endX: currentArrow.endX,
          endY: currentArrow.endY,
          color: selectedColor
        };
        onUpdateStep({ arrows: [...(step.arrows || []), newArrow] });
        setSelectedArrowId(newArrow.id);
        setIsBoxSelected(false);
      }
      setCurrentArrow(null);
      setActiveTool('none');
    } else if (dragMode === 'new' && currentBox && currentBox.w > 15 && currentBox.h > 15) {
      if (activeTool === 'highlight') {
        onUpdateStep({
          highlight: {
            x: currentBox.x,
            y: currentBox.y,
            width: currentBox.w,
            height: currentBox.h,
            color: selectedColor,
            style: 'border'
          }
        });
        setIsBoxSelected(true);
        setSelectedArrowId(null);
        setActiveTool('none'); // Return to normal mode after drawing
      } else if (activeTool === 'blur') {
        const newRegion: BlurRegion = {
          id: 'blur_' + Date.now(),
          x: currentBox.x,
          y: currentBox.y,
          width: currentBox.w,
          height: currentBox.h
        };
        onUpdateStep({ blurRegions: [...(step.blurRegions || []), newRegion] });
        setActiveTool('none');
      } else if (activeTool === 'crop') {
        setCropSelection(currentBox);
      }
    }

    setDragMode(null);
    setCurrentBox(null);
    setStartPos(null);
    setInitialBox(null);
    setInitialArrow(null);
  };

  // Delete Highlight Box
  const handleDeleteHighlight = () => {
    onUpdateStep({ highlight: undefined });
    setIsBoxSelected(false);
  };

  // Delete Selected Arrow
  const handleDeleteArrow = () => {
    if (!selectedArrowId || !step.arrows) return;
    const remaining = step.arrows.filter((a) => a.id !== selectedArrowId);
    onUpdateStep({ arrows: remaining });
    setSelectedArrowId(null);
  };

  // Add preset arrow pointing to the focus box or center
  const handleAddPresetArrow = () => {
    if (!canvasRef.current) return;
    const cw = canvasRef.current.width;
    const ch = canvasRef.current.height;

    let startX = Math.round(cw * 0.35);
    let startY = Math.round(ch * 0.35);
    let endX = Math.round(cw * 0.48);
    let endY = Math.round(ch * 0.48);

    if (step.highlight) {
      const h = step.highlight;
      // Position arrow pointing diagonally to the top-left or center of the highlight box
      startX = Math.max(15, Math.round(h.x - Math.max(60, cw * 0.08)));
      startY = Math.max(15, Math.round(h.y - Math.max(60, ch * 0.08)));
      endX = Math.round(h.x + Math.min(10, h.width * 0.2));
      endY = Math.round(h.y + Math.min(10, h.height * 0.2));
    }

    const newArrow: ArrowAnnotation = {
      id: 'arrow_' + Date.now(),
      startX,
      startY,
      endX,
      endY,
      color: selectedColor
    };

    onUpdateStep({ arrows: [...(step.arrows || []), newArrow] });
    setSelectedArrowId(newArrow.id);
    setIsBoxSelected(false);
    setActiveTool('none');
  };

  // Apply Crop
  const applyCrop = () => {
    if (!cropSelection || !imageObjRef.current) return;
    const img = imageObjRef.current;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = cropSelection.w;
    tempCanvas.height = cropSelection.h;
    const tempCtx = tempCanvas.getContext('2d');
    if (!tempCtx) return;

    tempCtx.drawImage(
      img,
      cropSelection.x,
      cropSelection.y,
      cropSelection.w,
      cropSelection.h,
      0,
      0,
      cropSelection.w,
      cropSelection.h
    );

    const croppedDataUrl = tempCanvas.toDataURL('image/png');
    onUpdateStep({
      originalScreenshot: step.originalScreenshot || step.screenshot,
      screenshot: croppedDataUrl,
      annotatedScreenshot: croppedDataUrl,
      highlight: undefined,
      blurRegions: [],
      arrows: []
    });

    setCropSelection(null);
    setActiveTool('none');
    setIsBoxSelected(false);
    setSelectedArrowId(null);
  };

  // Reset to Original Screenshot
  const handleResetToOriginal = () => {
    const original = step.originalScreenshot || step.screenshot;
    if (original) {
      onUpdateStep({
        screenshot: original,
        originalScreenshot: original,
        annotatedScreenshot: original,
        highlight: undefined,
        blurRegions: [],
        arrows: []
      });
      setCropSelection(null);
      setIsBoxSelected(false);
      setSelectedArrowId(null);
    }
  };

  // Active color to highlight in the palette
  const activeSelectedArrow = selectedArrowId && step.arrows ? step.arrows.find((a) => a.id === selectedArrowId) : null;
  const currentActiveColor = activeSelectedArrow ? (activeSelectedArrow.color || selectedColor) : (step.highlight?.color || selectedColor);

  return (
    <div className="flex flex-col gap-3">
      {/* Visual Annotation & Editing Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-3 rounded-2xl border border-slate-200 shadow-sm">
        {/* Tool Selector Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Highlight Box Button */}
          <button
            onClick={() => {
              if (activeTool === 'highlight') {
                setActiveTool('none');
              } else {
                setActiveTool('highlight');
                setIsBoxSelected(true);
                setSelectedArrowId(null);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'highlight' || (isBoxSelected && step.highlight)
                ? 'bg-rose-500 text-white shadow-sm ring-2 ring-rose-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Square size={13} strokeWidth={2.5} />
            <span>Kotak Merah Fokus</span>
          </button>

          {/* Arrow Tool Button */}
          <button
            onClick={() => {
              if (activeTool === 'arrow') {
                setActiveTool('none');
              } else {
                setActiveTool('arrow');
                setIsBoxSelected(false);
              }
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'arrow' || selectedArrowId
                ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ArrowUpRight size={14} strokeWidth={2.5} />
            <span>Panah Petunjuk</span>
          </button>

          {/* Quick Preset: Add arrow to focus box */}
          {step.highlight && (
            <button
              onClick={handleAddPresetArrow}
              title="Tambahkan panah otomatis yang menunjuk ke kotak fokus"
              className="flex items-center gap-1 px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-xl text-xs font-semibold transition-all"
            >
              <ArrowUpRight size={12} /> + Panah Fokus
            </button>
          )}

          {/* Crop Tool Button */}
          <button
            onClick={() => {
              setActiveTool(activeTool === 'crop' ? 'none' : 'crop');
              setIsBoxSelected(false);
              setSelectedArrowId(null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'crop'
                ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Crop size={13} strokeWidth={2.5} />
            <span>Crop Foto</span>
          </button>

          {/* Blur Tool Button */}
          <button
            onClick={() => {
              setActiveTool(activeTool === 'blur' ? 'none' : 'blur');
              setIsBoxSelected(false);
              setSelectedArrowId(null);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'blur'
                ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <EyeOff size={13} strokeWidth={2.5} />
            <span>Sensor / Blur</span>
          </button>

          {/* Delete Highlight Box Button */}
          {step.highlight && (
            <button
              onClick={handleDeleteHighlight}
              title="Hapus Kotak Merah (atau tekan tombol Delete)"
              className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-xl text-xs font-bold transition-all ml-1"
            >
              <Trash2 size={12} /> Hapus Kotak
            </button>
          )}

          {/* Delete Selected Arrow Button */}
          {selectedArrowId && (
            <button
              onClick={handleDeleteArrow}
              title="Hapus Panah Terpilih (atau tekan tombol Delete)"
              className="flex items-center gap-1 px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-xl text-xs font-bold transition-all ml-1"
            >
              <Trash2 size={12} /> Hapus Panah
            </button>
          )}

          {/* Color Palette (Active for box or arrow) */}
          {(step.highlight || selectedArrowId) && (
            <div className="flex items-center gap-1 pl-2 border-l border-slate-200">
              {HIGHLIGHT_COLORS.map((col) => (
                <button
                  key={col.hex}
                  onClick={() => {
                    setSelectedColor(col.hex);
                    if (selectedArrowId && step.arrows) {
                      const updated = step.arrows.map((a) =>
                        a.id === selectedArrowId ? { ...a, color: col.hex } : a
                      );
                      onUpdateStep({ arrows: updated });
                    } else if (step.highlight) {
                      onUpdateStep({
                        highlight: { ...step.highlight, color: col.hex }
                      });
                    }
                  }}
                  title={col.name}
                  style={{ backgroundColor: col.hex }}
                  className={`w-5 h-5 rounded-full transition-transform ${
                    currentActiveColor === col.hex ? 'scale-125 ring-2 ring-offset-1 ring-slate-400' : 'hover:scale-110'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right side: Crop confirmation / Reset */}
        <div className="flex items-center gap-2">
          {cropSelection ? (
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 p-1 rounded-xl">
              <button
                onClick={applyCrop}
                className="flex items-center gap-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-sm"
              >
                <Check size={13} /> Terapkan Crop
              </button>
              <button
                onClick={() => setCropSelection(null)}
                className="p-1 hover:bg-slate-200 text-slate-600 rounded-lg text-xs"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleResetToOriginal}
              className="flex items-center gap-1 px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
            >
              <RotateCcw size={12} /> Reset Foto Asli
            </button>
          )}
        </div>
      </div>

      {/* Instructions / Status hint */}
      <div className="text-[11px] text-slate-500 px-1 font-medium flex items-center justify-between">
        <span>
          {activeTool === 'highlight' && '👉 Tarik kotak baru di atas gambar untuk membuat kotak fokus merah.'}
          {activeTool === 'arrow' && '👉 Klik dan seret (drag) mouse dari pangkal ke arah target untuk menggambar panah.'}
          {activeTool === 'crop' && '👉 Tarik kotak area foto yang ingin Anda pertahankan.'}
          {activeTool === 'blur' && '👉 Tarik kotak di atas data sensitif (password/email) untuk memburamkannya.'}
          {activeTool === 'none' &&
            (selectedArrowId
              ? '💡 Panah aktif: Tarik ujung panah untuk ubah arah/panjang, geser garisnya, atau tekan Delete untuk menghapus.'
              : isBoxSelected && step.highlight
              ? '💡 Kotak aktif: Tarik titik untuk ubah ukuran, geser bagian dalam, atau tekan Delete untuk menghapus.'
              : '💡 Klik "Panah Petunjuk" atau "Kotak Merah Fokus" untuk menambah penunjuk visual ke gambar.')}
        </span>
        <div className="flex items-center gap-2">
          {step.highlight && (
            <span className="text-rose-600 font-semibold flex items-center gap-1">
              <Move size={11} /> Kotak Fokus Aktif
            </span>
          )}
          {step.arrows && step.arrows.length > 0 && (
            <span className="text-blue-600 font-semibold flex items-center gap-1">
              <ArrowUpRight size={11} /> {step.arrows.length} Panah
            </span>
          )}
        </div>
      </div>

      {/* Screenshot Canvas Viewer */}
      <div
        ref={containerRef}
        className="relative bg-slate-900 rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center p-3 min-h-[380px]"
      >
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ cursor: hoverCursor }}
          className="max-w-full max-h-[620px] object-contain rounded"
        />

        {/* Live Dragging Arrow Preview Overlay */}
        {dragMode === 'new-arrow' && currentArrow && canvasRef.current && (
          <svg
            className="absolute inset-0 pointer-events-none w-full h-full"
            viewBox={`0 0 ${canvasRef.current.width} ${canvasRef.current.height}`}
          >
            <defs>
              <marker
                id="preview-arrowhead"
                markerWidth="12"
                markerHeight="8"
                refX="10"
                refY="4"
                orient="auto"
              >
                <polygon points="0 0, 12 4, 0 8" fill={selectedColor} />
              </marker>
            </defs>
            <line
              x1={currentArrow.startX}
              y1={currentArrow.startY}
              x2={currentArrow.endX}
              y2={currentArrow.endY}
              stroke={selectedColor}
              strokeWidth={Math.max(4, Math.round(canvasRef.current.width * 0.0035))}
              strokeLinecap="round"
              markerEnd="url(#preview-arrowhead)"
            />
          </svg>
        )}

        {/* Live Dragging Box Overlay */}
        {dragMode === 'new' && currentBox && canvasRef.current && (
          <div
            style={{
              position: 'absolute',
              left: `${(currentBox.x / canvasRef.current.width) * 100}%`,
              top: `${(currentBox.y / canvasRef.current.height) * 100}%`,
              width: `${(currentBox.w / canvasRef.current.width) * 100}%`,
              height: `${(currentBox.h / canvasRef.current.height) * 100}%`,
              border: `2px dashed ${
                activeTool === 'crop'
                  ? '#F59E0B'
                  : activeTool === 'blur'
                  ? '#A855F7'
                  : selectedColor
              }`,
              backgroundColor:
                activeTool === 'crop'
                  ? 'rgba(245, 158, 11, 0.2)'
                  : activeTool === 'blur'
                  ? 'rgba(168, 85, 247, 0.2)'
                  : selectedColor + '20',
              pointerEvents: 'none'
            }}
          />
        )}

        {/* Waiting for Crop Confirmation Overlay */}
        {cropSelection && canvasRef.current && (
          <div
            style={{
              position: 'absolute',
              left: `${(cropSelection.x / canvasRef.current.width) * 100}%`,
              top: `${(cropSelection.y / canvasRef.current.height) * 100}%`,
              width: `${(cropSelection.w / canvasRef.current.width) * 100}%`,
              height: `${(cropSelection.h / canvasRef.current.height) * 100}%`,
              border: '2px solid #F59E0B',
              boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
              pointerEvents: 'none'
            }}
          />
        )}
      </div>
    </div>
  );
};
