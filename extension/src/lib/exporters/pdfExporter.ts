import { jsPDF } from 'jspdf';
import type { Workflow } from '../../types';

export async function exportToPdf(workflow: Workflow): Promise<void> {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  let cursorY = margin;

  // Helper for adding new page if content overflows
  function checkPageBreak(requiredHeight: number) {
    if (cursorY + requiredHeight > pageHeight - margin) {
      doc.addPage();
      cursorY = margin;
      return true;
    }
    return false;
  }

  // --- COVER / HEADER ---
  // Accent Bar
  doc.setFillColor(255, 92, 53); // #FF5C35
  doc.rect(margin, cursorY, 15, 3, 'F');
  cursorY += 8;

  // Document Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(30, 30, 36);
  doc.text(workflow.title, margin, cursorY, { maxWidth: contentWidth });
  cursorY += 10;

  // Description
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(100, 100, 100);
  if (workflow.description) {
    doc.text(workflow.description, margin, cursorY, { maxWidth: contentWidth });
    cursorY += 8;
  }

  // Metadata
  doc.setFontSize(9);
  doc.setTextColor(140, 140, 140);
  const dateStr = new Date(workflow.createdAt).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  doc.text(`Dibuat: ${dateStr}   |   Total: ${workflow.steps.length} Langkah`, margin, cursorY);
  cursorY += 6;

  // Divider
  doc.setDrawColor(220, 220, 220);
  doc.line(margin, cursorY, pageWidth - margin, cursorY);
  cursorY += 10;

  // --- STEPS ---
  for (let i = 0; i < workflow.steps.length; i++) {
    const step = workflow.steps[i];
    const imageSource = step.annotatedScreenshot || step.screenshot;

    // Estimate step height: Header (15mm) + Desc (10mm) + Image (90mm)
    checkPageBreak(50);

    // Step Number Badge
    doc.setFillColor(255, 92, 53);
    doc.roundedRect(margin, cursorY - 4, 22, 6, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(255, 255, 255);
    doc.text(`LANGKAH ${i + 1}`, margin + 2.5, cursorY);

    // Step Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(30, 30, 36);
    doc.text(step.title, margin + 26, cursorY, { maxWidth: contentWidth - 26 });
    cursorY += 7;

    // Step Description
    if (step.description) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      const splitDesc = doc.splitTextToSize(step.description, contentWidth);
      doc.text(splitDesc, margin, cursorY);
      cursorY += splitDesc.length * 5 + 3;
    }

    // Callout (if any)
    if (step.callout && step.callout.type !== 'none' && step.callout.text) {
      checkPageBreak(15);
      doc.setFillColor(254, 243, 199); // amber-100
      doc.setDrawColor(245, 158, 11); // amber-500
      doc.roundedRect(margin, cursorY, contentWidth, 8, 1, 1, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(180, 83, 9);
      doc.text(
        `${step.callout.type.toUpperCase()}: ${step.callout.text}`,
        margin + 4,
        cursorY + 5.5,
        { maxWidth: contentWidth - 8 }
      );
      cursorY += 12;
    }

    // Embed Image
    if (imageSource && imageSource.startsWith('data:image')) {
      checkPageBreak(95);
      try {
        const imgWidth = contentWidth;
        const imgHeight = 90; // Default scaled height
        doc.addImage(imageSource, 'PNG', margin, cursorY, imgWidth, imgHeight, undefined, 'FAST');
        cursorY += imgHeight + 12;
      } catch (err) {
        console.error('Failed to embed PDF image:', err);
      }
    }

    // Small divider between steps
    if (i < workflow.steps.length - 1) {
      checkPageBreak(10);
      doc.setDrawColor(240, 240, 240);
      doc.line(margin, cursorY - 4, pageWidth - margin, cursorY - 4);
    }
  }

  // --- FOOTER (Page numbers) ---
  const totalPages = (doc as any).internal.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(160, 160, 160);
    doc.text(
      `Halaman ${p} dari ${totalPages}  |  Dibuat dengan StepFlow`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
  }

  // Download PDF
  const fileName = `${workflow.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.pdf`;
  doc.save(fileName);
}

