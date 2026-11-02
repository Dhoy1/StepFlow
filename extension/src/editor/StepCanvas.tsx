import React, { useRef, useEffect, useState } from 'react';
import { EyeOff, RotateCcw, BoxSelect, Check } from 'lucide-react';
import type { Step, BlurRegion } from '../types';

interface StepCanvasProps {
  step: Step;
  onUpdateStep: (updated: Partial<Step>) => void;
}

export const StepCanvas: React.FC<StepCanvasProps> = ({ step, onUpdateStep }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isBlurMode, setIsBlurMode] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [currentBox, setCurrentBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imageObjRef = useRef<HTMLImageElement | null>(null);

  // Load raw image into memory
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

  // Re-render when blur regions or highlight changes
  useEffect(() => {
    if (imgLoaded) {
      renderCanvas();
    }
  }, [step.blurRegions, step.highlight, imgLoaded]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    const img = imageObjRef.current;
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions matching native image
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;

    // 1. Draw base screenshot
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Calculate scale factor between viewport and natural screenshot dimensions
    const scaleX = step.targetElement
      ? canvas.width / step.targetElement.viewport.width
      : 1;
    const scaleY = step.targetElement
      ? canvas.height / step.targetElement.viewport.height
      : 1;

    // 2. Draw Highlight Box (Tango style)
    if (step.highlight && step.highlight.width > 0) {
      const hx = step.highlight.x * scaleX;
      const hy = step.highlight.y * scaleY;
      const hw = step.highlight.width * scaleX;
      const hh = step.highlight.height * scaleY;

      // Outer glow / shadow
      ctx.save();
      ctx.shadowColor = 'rgba(255, 92, 53, 0.5)';
      ctx.shadowBlur = 12;
      ctx.strokeStyle = step.highlight.color || '#FF5C35';
      ctx.lineWidth = Math.max(3, 4 * scaleX);

      // Draw rounded rectangle
      drawRoundedRect(ctx, hx - 4, hy - 4, hw + 8, hh + 8, 8);
      ctx.stroke();

      // Inner subtle tint
      ctx.fillStyle = 'rgba(255, 92, 53, 0.08)';
      ctx.fill();
      ctx.restore();
    }

    // 3. Draw Blur / Redaction Regions
    if (step.blurRegions && step.blurRegions.length > 0) {
      for (const region of step.blurRegions) {
        applyPixelateOrBlur(ctx, region.x, region.y, region.width, region.height);
      }
    }

    // Save final annotated screenshot as dataURL for docx/pptx/pdf export
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
      // Fast high-quality pixelation/mosaic for sensitive data
      const sampleSize = 10;
      const imgData = ctx.getImageData(x, y, w, h);
      const data = imgData.data;

      for (let py = 0; py < h; py += sampleSize) {
        for (let px = 0; px < w; px += sampleSize) {
          const index = (py * w + px) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];

          // Fill block
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

      // Add a subtle border around blurred area
      ctx.strokeStyle = 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, w, h);
    } catch (e) {
      console.warn('Blur failed:', e);
    }
  }

  // Handle Drag to Blur
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isBlurMode || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = canvasRef.current.width / rect.width;
    const x = (e.clientX - rect.left) * scale;
    const y = (e.clientY - rect.top) * scale;

    setIsDrawing(true);
    setStartPos({ x, y });
    setCurrentBox({ x, y, w: 0, h: 0 });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !startPos || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = canvasRef.current.width / rect.width;
    const currentX = (e.clientX - rect.left) * scale;
    const currentY = (e.clientY - rect.top) * scale;

    const x = Math.min(startPos.x, currentX);
    const y = Math.min(startPos.y, currentY);
    const w = Math.abs(currentX - startPos.x);
    const h = Math.abs(currentY - startPos.y);

    setCurrentBox({ x, y, w, h });
  };

  const handleMouseUp = () => {
    if (!isDrawing || !currentBox) return;
    setIsDrawing(false);

    if (currentBox.w > 10 && currentBox.h > 10) {
      const newRegion: BlurRegion = {
        id: 'blur_' + Date.now(),
        x: Math.round(currentBox.x),
        y: Math.round(currentBox.y),
        width: Math.round(currentBox.w),
        height: Math.round(currentBox.h)
      };

      const updatedBlur = [...(step.blurRegions || []), newRegion];
      onUpdateStep({ blurRegions: updatedBlur });
    }

    setCurrentBox(null);
    setStartPos(null);
  };

  const resetAnnotations = () => {
    onUpdateStep({
      blurRegions: [],
      annotatedScreenshot: step.screenshot
    });
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Canvas Toolbar */}
      <div className="flex items-center justify-between bg-white px-4 py-2.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsBlurMode(!isBlurMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              isBlurMode
                ? 'bg-rose-500 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <EyeOff size={14} />
            {isBlurMode ? 'Mode Blur Aktif (Tarik Kursor)' : 'Buramkan Data Sensitif'}
          </button>

          {(step.blurRegions?.length ?? 0) > 0 && (
            <span className="text-xs text-slate-500 font-medium">
              {step.blurRegions?.length} area disamarkan
            </span>
          )}
        </div>

        <button
          onClick={resetAnnotations}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 font-medium rounded-lg hover:bg-slate-100 transition-colors"
        >
          <RotateCcw size={13} /> Reset Anotasi
        </button>
      </div>

      {/* Screenshot Canvas Viewer */}
      <div
        ref={containerRef}
        className="relative bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 flex items-center justify-center p-2 min-h-[360px]"
      >
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          className={`max-w-full max-h-[600px] object-contain rounded ${
            isBlurMode ? 'cursor-crosshair' : 'cursor-default'
          }`}
        />

        {/* Temporary Dragging Box Overlay */}
        {isDrawing && currentBox && canvasRef.current && (
          <div
            style={{
              position: 'absolute',
              left: `${(currentBox.x / canvasRef.current.width) * 100}%`,
              top: `${(currentBox.y / canvasRef.current.height) * 100}%`,
              width: `${(currentBox.w / canvasRef.current.width) * 100}%`,
              height: `${(currentBox.h / canvasRef.current.height) * 100}%`,
              border: '2px dashed #EF4444',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              pointerEvents: 'none'
            }}
          />
        )}
      </div>
    </div>
  );
};

