import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  ImageRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  convertInchesToTwip
} from 'docx';
import type { Workflow } from '../../types';

// Convert Base64 data URL to Uint8Array for docx ImageRun
function base64ToUint8Array(base64: string): Uint8Array {
  const cleanBase64 = base64.replace(/^data:image\/\w+;base64,/, '');
  const binaryString = atob(cleanBase64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export async function exportToWord(workflow: Workflow): Promise<void> {
  const children: any[] = [];

  // 1. Cover Title & Header
  children.push(
    new Paragraph({
      text: workflow.title,
      heading: HeadingLevel.TITLE,
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 120 }
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: workflow.description || 'Panduan Penggunaan Langkah demi Langkah',
          italics: true,
          color: '555555',
          size: 24
        })
      ],
      spacing: { after: 300 }
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: `Dibuat pada: ${new Date(workflow.createdAt).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}  |  Total: ${workflow.steps.length} Langkah`,
          size: 18,
          color: '888888'
        })
      ],
      spacing: { after: 400 }
    }),
    new Paragraph({
      text: '—'.repeat(40),
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 }
    })
  );

  // 2. Loop through each step
  for (let i = 0; i < workflow.steps.length; i++) {
    const step = workflow.steps[i];
    const imageSource = step.annotatedScreenshot || step.screenshot;

    // Step Header Badge & Title
    children.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 300, after: 120 },
        children: [
          new TextRun({
            text: `Langkah ${i + 1}: `,
            bold: true,
            color: 'FF5C35'
          }),
          new TextRun({
            text: step.title,
            bold: true,
            color: '1E1E24'
          })
        ]
      })
    );

    // Step Description
    if (step.description) {
      children.push(
        new Paragraph({
          text: step.description,
          spacing: { after: 180 },
          children: [
            new TextRun({
              text: step.description,
              size: 22,
              color: '333333'
            })
          ]
        })
      );
    }

    // Callout Box (if present)
    if (step.callout && step.callout.type !== 'none' && step.callout.text) {
      const calloutTitle =
        step.callout.type === 'tip'
          ? '💡 TIPS'
          : step.callout.type === 'warning'
          ? '⚠️ PERHATIAN'
          : 'ℹ️ INFORMASI';

      children.push(
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new RowWithBorder(calloutTitle, step.callout.text)
          ]
        }),
        new Paragraph({ spacing: { after: 150 } })
      );
    }

    // Embed Screenshot Image
    if (imageSource && imageSource.startsWith('data:image')) {
      try {
        const imageBytes = base64ToUint8Array(imageSource);
        children.push(
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 120, after: 300 },
            children: [
              new ImageRun({
                data: imageBytes,
                transformation: {
                  width: 540,
                  height: 300
                },
                type: 'png'
              })
            ]
          })
        );
      } catch (e) {
        console.error('Failed to embed image in docx:', e);
      }
    }
  }

  // Create docx document
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.8),
              right: convertInchesToTwip(0.8),
              bottom: convertInchesToTwip(0.8),
              left: convertInchesToTwip(0.8)
            }
          }
        },
        children
      }
    ]
  });

  // Generate and download
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${workflow.title.replace(/[^a-zA-Z0-9_-]/g, '_')}.docx`;
  a.click();
  URL.revokeObjectURL(url);
}

// Helper to construct callout table row
function RowWithBorder(title: string, content: string) {
  return new TableRow({
    children: [
      new TableCell({
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: title, bold: true, size: 20 }),
              new TextRun({ text: ` — ${content}`, size: 20 })
            ]
          })
        ],
        borders: {
          left: { style: BorderStyle.SINGLE, size: 16, color: 'FF5C35' },
          top: { style: BorderStyle.NONE },
          right: { style: BorderStyle.NONE },
          bottom: { style: BorderStyle.NONE }
        }
      })
    ]
  });
}

