import React, { useRef, useEffect, useState } from 'react';
import {
  Square,
  Crop,
  EyeOff,
  RotateCcw,
  Check,
  X,
  Trash2,
  Move
} from 'lucide-react';
import type { Step, BlurRegion, HighlightConfig } from '../types';

interface StepCanvasProps {
  step: Step;
  onUpdateStep: (updated: Partial<Step>) => void;
}

type ToolMode = 'none' | 'highlight' | 'crop' | 'blur';
type HandleType = 'move' | 'nw' | 'ne' | 'se' | 'sw' | 'n' | 's' | 'e' | 'w';

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
  
  // Box selection: 8 resize dots ONLY appear when user clicks the box to edit it
  const [isBoxSelected, setIsBoxSelected] = useState(false);

  // Dragging & Interaction State
  const [dragMode, setDragMode] = useState<HandleType | 'new' | null>(null);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [initialBox, setInitialBox] = useState<HighlightConfig | null>(null);
  const [currentBox, setCurrentBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [cropSelection, setCropSelection] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [hoverCursor, setHoverCursor] = useState<string>('default');

  const [imgLoaded, setImgLoaded] = useState(false);
  const imageObjRef = useRef<HTMLImageElement | null>(null);

  // Load screenshot into memory
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = step.screenshot;
    img.onload = () => {
      imageObjRef.current = img;
      setImgLoaded(true);
      renderCanvas();
    };
    // Deselect box when switching steps
    setIsBoxSelected(false);
  }, [step.id, step.screenshot]);

  // Re-render when annotations or selection change
  useEffect(() => {
    if (imgLoaded) {
      renderCanvas();
    }
  }, [step.blurRegions, step.highlight, selectedColor, imgLoaded, isBoxSelected]);

  // Handle keyboard shortcut (Delete / Backspace to delete highlight box)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'Delete' || e.key === 'Backspace') && step.highlight && isBoxSelected) {
        const tag = (document.activeElement?.tagName || '').toLowerCase();
        if (tag !== 'input' && tag !== 'textarea') {
          handleDeleteHighlight();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step.highlight, isBoxSelected]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    const img = imageObjRef.current;
    if (!canvas || !img) return;

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

    // 4. BAKE ANNOTATED SCREENSHOT HERE (100% CLEAN - NO RESIZE HANDLES/DOTS IN PPT/PDF/DOCX!)
    const cleanAnnotatedUrl = canvas.toDataURL('image/png');
    if (step.annotatedScreenshot !== cleanAnnotatedUrl) {
      onUpdateStep({ annotatedScreenshot: cleanAnnotatedUrl });
    }

    // 5. DRAW 8 RESIZE HANDLES ONLY WHEN BOX IS SELECTED FOR EDITING
    if (isBoxSelected && step.highlight && step.highlight.width > 0) {
      const h = step.highlight;
      const boxColor = h.color || selectedColor;
      drawResizeHandles(ctx, h.x, h.y, h.width, h.height, boxColor);
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

  // Hit test handles or inside box
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

    // If active tool is crop or blur, start dragging a new region
    if (activeTool === 'crop' || activeTool === 'blur') {
      setDragMode('new');
      setStartPos({ x, y });
      setCurrentBox({ x, y, w: 0, h: 0 });
      return;
    }

    // If active tool is highlight, start drawing a new highlight box
    if (activeTool === 'highlight') {
      setDragMode('new');
      setStartPos({ x, y });
      setCurrentBox({ x, y, w: 0, h: 0 });
      return;
    }

    // In normal mode ('none'):
    const hit = getHitTestTarget(x, y);
    if (hit && step.highlight) {
      setIsBoxSelected(true);
      setDragMode(hit);
      setStartPos({ x, y });
      setInitialBox({ ...step.highlight });
    } else {
      // Clicked outside: deselect the box and hide dots
      setIsBoxSelected(false);
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
      if (activeTool === 'crop' || activeTool === 'blur' || activeTool === 'highlight') {
        setHoverCursor('crosshair');
        return;
      }
      
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

    if (dragMode === 'new' && currentBox && currentBox.w > 15 && currentBox.h > 15) {
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
  };

  // Delete Highlight Box
  const handleDeleteHighlight = () => {
    onUpdateStep({ highlight: undefined });
    setIsBoxSelected(false);
  };

  // Apply Crop
  const applyCrop = () => {
    if (!cropSelection || !imageObjRef.current) return;
    const img = imageObjRef.current;

    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = cropSelection.w;
    cropCanvas.height = cropSelection.h;
    const ctx = cropCanvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(
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

    const croppedDataUrl = cropCanvas.toDataURL('image/png');
    const original = step.originalScreenshot || step.screenshot;

    onUpdateStep({
      originalScreenshot: original,
      screenshot: croppedDataUrl,
      annotatedScreenshot: croppedDataUrl,
      highlight: undefined,
      blurRegions: []
    });

    setCropSelection(null);
    setActiveTool('none');
    setIsBoxSelected(false);
  };

  // Reset to original
  const handleResetToOriginal = () => {
    if (confirm('Reset screenshot ke gambar asli tanpa crop & anotasi?')) {
      const original = step.originalScreenshot || step.screenshot;
      onUpdateStep({
        screenshot: original,
        annotatedScreenshot: original,
        highlight: undefined,
        blurRegions: []
      });
      setCropSelection(null);
      setIsBoxSelected(false);
    }
  };

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

          {/* Crop Tool Button */}
          <button
            onClick={() => setActiveTool(activeTool === 'crop' ? 'none' : 'crop')}
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
            onClick={() => setActiveTool(activeTool === 'blur' ? 'none' : 'blur')}
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

          {/* Color Palette */}
          {step.highlight && (
            <div className="flex items-center gap-1 pl-2 border-l border-slate-200">
              {HIGHLIGHT_COLORS.map((col) => (
                <button
                  key={col.hex}
                  onClick={() => {
                    setSelectedColor(col.hex);
                    if (step.highlight) {
                      onUpdateStep({
                        highlight: { ...step.highlight, color: col.hex }
                      });
                    }
                  }}
                  title={col.name}
                  style={{ backgroundColor: col.hex }}
                  className={`w-5 h-5 rounded-full transition-transform ${
                    ((step.highlight?.color) || selectedColor) === col.hex ? 'scale-125 ring-2 ring-offset-1 ring-slate-400' : 'hover:scale-110'
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
          {activeTool === 'crop' && '👉 Tarik kotak area foto yang ingin Anda pertahankan.'}
          {activeTool === 'blur' && '👉 Tarik kotak di atas data sensitif (password/email) untuk memburamkannya.'}
          {activeTool === 'none' &&
            (step.highlight
              ? isBoxSelected
                ? '💡 Kotak aktif: Tarik titik untuk ubah ukuran, geser bagian dalam, atau tekan Delete untuk menghapus.'
                : '💡 Klik pada kotak merah untuk mengedit ukuran/posisi atau menghapusnya.'
              : '💡 Klik tombol "Kotak Merah Fokus" jika ingin menambahkan kotak sorotan baru.')}
        </span>
        {step.highlight && (
          <span className="text-rose-600 font-semibold flex items-center gap-1">
            <Move size={11} /> Kotak Fokus Aktif
          </span>
        )}
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
