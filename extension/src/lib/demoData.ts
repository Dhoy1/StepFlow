import type { Workflow } from '../types';

// Helper to generate a clean mock screenshot on a canvas
function generateMockScreenshot(stepText: string, highlightText: string): string {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 700;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Background browser window
  ctx.fillStyle = '#F1F5F9';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Browser top bar
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, 70);
  ctx.fillStyle = '#E2E8F0';
  ctx.fillRect(150, 18, 900, 34);

  // Address bar text
  ctx.fillStyle = '#64748B';
  ctx.font = '14px sans-serif';
  ctx.fillText('https://aplikasi-perusahaan.internal/dashboard', 170, 40);

  // Window dots
  ctx.fillStyle = '#EF4444';
  ctx.beginPath();
  ctx.arc(30, 35, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#F59E0B';
  ctx.beginPath();
  ctx.arc(50, 35, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#10B981';
  ctx.beginPath();
  ctx.arc(70, 35, 6, 0, Math.PI * 2);
  ctx.fill();

  // Page Content Card
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowColor = 'rgba(0,0,0,0.06)';
  ctx.shadowBlur = 20;
  ctx.fillRect(60, 110, 1080, 530);
  ctx.shadowColor = 'transparent';

  // Title in card
  ctx.fillStyle = '#1E293B';
  ctx.font = 'bold 26px sans-serif';
  ctx.fillText(stepText, 100, 180);

  ctx.fillStyle = '#64748B';
  ctx.font = '16px sans-serif';
  ctx.fillText('Silakan ikuti instruksi di bawah ini untuk menyelesaikan alur.', 100, 220);

  // Form Fields
  ctx.fillStyle = '#F8FAFC';
  ctx.strokeStyle = '#CBD5E1';
  ctx.lineWidth = 1.5;
  ctx.fillRect(100, 260, 450, 46);
  ctx.strokeRect(100, 260, 450, 46);
  ctx.fillStyle = '#94A3B8';
  ctx.font = '15px sans-serif';
  ctx.fillText('user@company.com', 120, 290);

  // Action Button
  ctx.fillStyle = '#FF5C35';
  ctx.fillRect(100, 340, 200, 46);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText(highlightText, 140, 370);

  return canvas.toDataURL('image/png');
}

export function createDemoWorkflow(): Workflow {
  return {
    id: 'wf_demo_sample',
    title: 'Tutorial: Cara Menambahkan Karyawan Baru ke Sistem',
    description: 'Panduan lengkap orientasi dan penginputan data pegawai pada portal HR.',
    createdAt: Date.now(),
    updatedAt: Date.now(),
    targetUrl: 'https://aplikasi-perusahaan.internal/karyawan/tambah',
    steps: [
      {
        id: 'step_1',
        order: 1,
        actionType: 'click',
        title: 'Klik menu "Data Karyawan"',
        description: 'Buka navigasi samping kiri dan pilih menu Data Karyawan untuk membuka daftar pegawai.',
        url: 'https://aplikasi-perusahaan.internal/dashboard',
        pageTitle: 'Dashboard Utama',
        screenshot: generateMockScreenshot('Navigasi Menu Utama', 'Buka Menu'),
        callout: {
          type: 'info',
          text: 'Pastikan Anda telah memiliki hak akses administrator sebelum melanjutkan.'
        },
        highlight: {
          x: 100,
          y: 340,
          width: 200,
          height: 46,
          color: '#FF5C35',
          style: 'border'
        }
      },
      {
        id: 'step_2',
        order: 2,
        actionType: 'input',
        title: 'Ketik Email Karyawan Baru',
        description: 'Masukkan alamat email resmi kantor karyawan yang bersangkutan pada formulir.',
        url: 'https://aplikasi-perusahaan.internal/karyawan/tambah',
        pageTitle: 'Formulir Tambah Pegawai',
        screenshot: generateMockScreenshot('Formulir Pendaftaran Pegawai', 'Kirim Undangan'),
        callout: {
          type: 'tip',
          text: 'Gunakan format email resmi @perusahaan.com agar terintegrasi otomatis dengan SSO.'
        },
        highlight: {
          x: 100,
          y: 260,
          width: 450,
          height: 46,
          color: '#FF5C35',
          style: 'border'
        }
      },
      {
        id: 'step_3',
        order: 3,
        actionType: 'click',
        title: 'Klik tombol "Simpan & Verifikasi"',
        description: 'Klik tombol simpan untuk mengirimkan data ke basis data dan mengirim email aktivasi.',
        url: 'https://aplikasi-perusahaan.internal/karyawan/tambah',
        pageTitle: 'Formulir Tambah Pegawai',
        screenshot: generateMockScreenshot('Konfirmasi Data Pegawai', 'Simpan Data'),
        callout: {
          type: 'warning',
          text: 'Data NIK dan nomor rekening tidak dapat diubah setelah diverifikasi.'
        },
        highlight: {
          x: 100,
          y: 340,
          width: 200,
          height: 46,
          color: '#FF5C35',
          style: 'border'
        }
      }
    ]
  };
}

