import pptxgen from 'pptxgenjs';
import type { Workflow } from '../../types';

export async function exportToPptx(workflow: Workflow): Promise<void> {
  const pres = new pptxgen();

  // 16:9 Widescreen layout
  pres.layout = 'LAYOUT_16x9';

  // --- SLIDE 1: COVER SLIDE ---
  const coverSlide = pres.addSlide();
  coverSlide.background = { color: '1E1E24' }; // Modern dark background

  // Title
  coverSlide.addText(workflow.title, {
    x: 1.0,
    y: 2.2,
    w: 11.3,
    h: 1.5,
    fontSize: 36,
    bold: true,
    color: 'FFFFFF',
    fontFace: 'Arial'
  });

  // Description & Subtitle
  coverSlide.addText(
    workflow.description || 'Panduan Penggunaan Langkah demi Langkah',
    {
      x: 1.0,
      y: 3.8,
      w: 11.3,
      h: 0.8,
      fontSize: 18,
      color: 'D1D5DB',
      italic: true,
      fontFace: 'Arial'
    }
  );

  // Metadata Footer
  coverSlide.addText(
    `Dibuat: ${new Date(workflow.createdAt).toLocaleDateString('id-ID')}  •  Total: ${workflow.steps.length} Langkah`,
    {
      x: 1.0,
      y: 5.8,
      w: 11.3,
      h: 0.5,
      fontSize: 12,
      color: '9CA3AF',
      fontFace: 'Arial'
    }
  );

  // Accent Line
  coverSlide.addShape(pres.ShapeType.rect, {
    x: 1.0,
    y: 2.0,
    w: 1.2,
    h: 0.08,
    fill: { color: 'FF5C35' }
  });

  // --- SLIDE 2..N: STEP SLIDES ---
  for (let i = 0; i < workflow.steps.length; i++) {
    const step = workflow.steps[i];
    const imageSource = step.annotatedScreenshot || step.screenshot;
    const slide = pres.addSlide();
    slide.background = { color: 'F8F9FA' };

    // Step Number Badge (Pill)
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8,
      y: 0.6,
      w: 2.2,
      h: 0.38,
      rectRadius: 0.19,
      fill: { color: 'FF5C35' }
    });
    slide.addText(`LANGKAH ${i + 1} DARI ${workflow.steps.length}`, {
      x: 0.8,
      y: 0.6,
      w: 2.2,
      h: 0.38,
      fontSize: 10,
      bold: true,
      color: 'FFFFFF',
      align: 'center',
      valign: 'middle'
    });

    // Step Title
    slide.addText(step.title, {
      x: 0.8,
      y: 1.2,
      w: 4.2,
      h: 1.2,
      fontSize: 22,
      bold: true,
      color: '1E1E24',
      valign: 'top',
      fontFace: 'Arial'
    });

    // Step Description
    if (step.description) {
      slide.addText(step.description, {
        x: 0.8,
        y: 2.5,
        w: 4.2,
        h: 2.0,
        fontSize: 14,
        color: '4B5563',
        valign: 'top',
        fontFace: 'Arial'
      });
    }

    // Callout Box (if present)
    if (step.callout && step.callout.type !== 'none' && step.callout.text) {
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.8,
        y: 4.8,
        w: 4.2,
        h: 1.4,
        rectRadius: 0.1,
        fill: { color: 'FFFFFF' },
        line: { color: 'FF5C35', width: 1.5 }
      });
      slide.addText(
        `${step.callout.type.toUpperCase()}: ${step.callout.text}`,
        {
          x: 1.0,
          y: 4.9,
          w: 3.8,
          h: 1.2,
          fontSize: 11,
          color: '374151',
          valign: 'middle'
        }
      );
    }

    // Screenshot on the Right Side
    if (imageSource && imageSource.startsWith('data:image')) {
      try {
        slide.addImage({
          data: imageSource,
          x: 5.3,
          y: 0.8,
          w: 7.2,
          h: 5.4,
          sizing: { type: 'contain', w: 7.2, h: 5.4 }
        });
      } catch (err) {
        console.error('Failed to embed slide image:', err);
      }
    }
  }

  // --- FINAL SLIDE ---
  const endSlide = pres.addSlide();
  endSlide.background = { color: '1E1E24' };
  endSlide.addText('Selesai', {
    x: 1.0,
    y: 2.8,
    w: 11.3,
    h: 1.0,
    fontSize: 40,
    bold: true,
    color: 'FFFFFF',
    align: 'center'
  });
  endSlide.addText('Tutorial ini telah selesai. Anda siap mempraktikkannya.', {
    x: 1.0,
    y: 3.8,
    w: 11.3,
    h: 0.6,
    fontSize: 16,
    color: '9CA3AF',
    align: 'center'
  });

  // Save PPTX
  const fileName = `${workflow.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pptx`;
  await pres.writeFile({ fileName });
}

