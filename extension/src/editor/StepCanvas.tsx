import React, { useRef, useEffect, useState } from 'react';
import {
  Square,
  Crop,
  EyeOff,
  RotateCcw,
  Check,
  X,
  Palette,
  Maximize2
} from 'lucide-react';
import type { Step, BlurRegion, HighlightConfig } from '../types';

interface StepCanvasProps {
  step: Step;
  onUpdateStep: (updated: Partial<Step>) => void;
}

type ToolMode = 'none' | 'highlight' | 'crop' | 'blur';

const HIGHLIGHT_COLORS = [
  { name: 'Merah', hex: '#EF4444' },
  { name: 'Oranye Tango', hex: '#FF5C35' },
  { name: 'Biru', hex: '#3B82F6' },
  { name: 'Hijau', hex: '#10B981' }
];

export const StepCanvas: React.FC<StepCanvasProps> = ({ step, onUpdateStep }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeTool, setActiveTool] = useState<ToolMode>('highlight');
  const [selectedColor, setSelectedColor] = useState('#EF4444'); // Default Merah
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [currentBox, setCurrentBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [cropSelection, setCropSelection] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  
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
  }, [step.id, step.screenshot]);

  // Re-render when annotations change
  useEffect(() => {
    if (imgLoaded) {
      renderCanvas();
    }
  }, [step.blurRegions, step.highlight, selectedColor, imgLoaded]);

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

    // 2. Draw Highlight Box (Red / Orange Box with glow)
    if (step.highlight && step.highlight.width > 0) {
      const h = step.highlight;

      ctx.save();
      ctx.shadowColor = h.color || selectedColor;
      ctx.shadowBlur = 14;
      ctx.strokeStyle = h.color || selectedColor;
      ctx.lineWidth = Math.max(4, Math.round(canvas.width * 0.0035));

      // Draw rounded rectangle
      drawRoundedRect(ctx, h.x - 2, h.y - 2, h.width + 4, h.height + 4, 8);
      ctx.stroke();

      // Subtle translucent inner fill
      ctx.fillStyle = (h.color || selectedColor) + '15'; // 8% opacity
      ctx.fill();
      ctx.restore();
    }

    // 3. Draw Blur / Redaction Regions
    if (step.blurRegions && step.blurRegions.length > 0) {
      for (const region of step.blurRegions) {
        applyPixelateOrBlur(ctx, region.x, region.y, region.width, region.height);
      }
    }

    // Export annotated screenshot
    const annotatedDataUrl = canvas.toDataURL('image/png');
    if (step.annotatedScreenshot !== annotatedDataUrl) {
      onUpdateStep({ annotatedScreenshot: annotatedDataUrl });
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

  // Mouse Handlers for Dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (activeTool === 'none' || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = canvasRef.current.width / rect.width;
    const x = Math.round((e.clientX - rect.left) * scale);
    const y = Math.round((e.clientY - rect.top) * scale);

    setIsDrawing(true);
    setStartPos({ x, y });
    setCurrentBox({ x, y, w: 0, h: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !startPos || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = canvasRef.current.width / rect.width;
    const currentX = Math.round((e.clientX - rect.left) * scale);
    const currentY = Math.round((e.clientY - rect.top) * scale);

    const x = Math.min(startPos.x, currentX);
    const y = Math.min(startPos.y, currentY);
    const w = Math.abs(currentX - startPos.x);
    const h = Math.abs(currentY - startPos.y);

    setCurrentBox({ x, y, w, h });
  };

  const handleMouseUp = () => {
    if (!isDrawing || !currentBox) return;
    setIsDrawing(false);

    if (currentBox.w > 15 && currentBox.h > 15) {
      if (activeTool === 'highlight') {
        // Apply or Replace Highlight Box
        const newHighlight: HighlightConfig = {
          x: currentBox.x,
          y: currentBox.y,
          width: currentBox.w,
          height: currentBox.h,
          color: selectedColor,
          style: 'border'
        };
        onUpdateStep({ highlight: newHighlight });
      } else if (activeTool === 'blur') {
        // Add Blur Region
        const newRegion: BlurRegion = {
          id: 'blur_' + Date.now(),
          x: currentBox.x,
          y: currentBox.y,
          width: currentBox.w,
          height: currentBox.h
        };
        onUpdateStep({ blurRegions: [...(step.blurRegions || []), newRegion] });
      } else if (activeTool === 'crop') {
        // Store selected crop box awaiting user confirmation
        setCropSelection(currentBox);
      }
    }

    setCurrentBox(null);
    setStartPos(null);
  };

  // Apply Crop Action
  const applyCrop = () => {
    if (!cropSelection || !imageObjRef.current) return;
    const img = imageObjRef.current;

    const cropCanvas = document.createElement('canvas');
    cropCanvas.width = cropSelection.w;
    cropCanvas.height = cropSelection.h;
    const ctx = cropCanvas.getContext('2d');
    if (!ctx) return;

    // Draw only the selected cropped rectangle from the original image
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

    // Backup original screenshot if not already saved
    const original = step.originalScreenshot || step.screenshot;

    onUpdateStep({
      originalScreenshot: original,
      screenshot: croppedDataUrl,
      annotatedScreenshot: croppedDataUrl,
      // Reset highlight so user can re-draw on new cropped bounds
      highlight: undefined,
      blurRegions: []
    });

    setCropSelection(null);
    setActiveTool('highlight');
  };

  const cancelCrop = () => {
    setCropSelection(null);
  };

  // Reset to original uncropped screenshot
  const handleResetToOriginal = () => {
    if (confirm('Kembalikan gambar ke ukuran awal (batalkan crop & hapus anotasi)?')) {
      const original = step.originalScreenshot || step.screenshot;
      onUpdateStep({
        screenshot: original,
        annotatedScreenshot: original,
        highlight: undefined,
        blurRegions: []
      });
      setCropSelection(null);
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
            onClick={() => setActiveTool('highlight')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'highlight'
                ? 'bg-rose-500 text-white shadow-sm ring-2 ring-rose-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Square size={13} strokeWidth={2.5} />
            <span>Kotak Merah / Sorotan</span>
          </button>

          {/* Crop Tool Button */}
          <button
            onClick={() => setActiveTool('crop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'crop'
                ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Crop size={13} strokeWidth={2.5} />
            <span>Potong (Crop) Gambar</span>
          </button>

          {/* Blur Tool Button */}
          <button
            onClick={() => setActiveTool('blur')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeTool === 'blur'
                ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <EyeOff size={13} strokeWidth={2.5} />
            <span>Sensor / Blur</span>
          </button>

          {/* Color Palette for Highlight */}
          {activeTool === 'highlight' && (
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
                    selectedColor === col.hex ? 'scale-125 ring-2 ring-offset-1 ring-slate-400' : 'hover:scale-110'
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
                onClick={cancelCrop}
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
              <RotateCcw size={12} /> Reset Ukuran Asli
            </button>
          )}
        </div>
      </div>

      {/* Instructions / Status hint */}
      <div className="text-[11px] text-slate-500 px-1 font-medium flex items-center justify-between">
        <span>
          {activeTool === 'highlight' && '👉 Tarik kursor pada gambar untuk menggambar kotak merah / penanda fokus.'}
          {activeTool === 'crop' && '👉 Tarik kursor membentuk kotak pada area yang ingin dipotong (crop).'}
          {activeTool === 'blur' && '👉 Tarik kursor pada area data sensitif (nama, password, email) untuk disamarkan.'}
        </span>
        {step.highlight && (
          <span className="text-rose-600 font-semibold">1 Kotak Sorotan Aktif</span>
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
          className="max-w-full max-h-[620px] object-contain rounded cursor-crosshair"
        />

        {/* Live Dragging Box Overlay */}
        {isDrawing && currentBox && canvasRef.current && (
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
