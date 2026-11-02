# 🚀 Panduan Lengkap & Walkthrough: StepFlow (Tango Clone)

Selamat datang di **StepFlow**! Aplikasi ini dirancang untuk merekam alur kerja website secara otomatis, menghasilkan panduan langkah demi langkah, dan mengekspor hasilnya ke format **Word (.docx)**, **PowerPoint (.pptx)**, **PDF (.pdf)**, serta tautan **Web Publik Interaktif** yang bisa dibuka oleh rekan kerja Anda.

---

## 📁 Struktur Workspace

```text
Record/
├── extension/             <-- Ekstensi Browser Chrome/Edge (Manifest V3)
│   ├── dist/              <-- HASIL BUILD: Folder ini yang di-load ke Chrome
│   ├── src/
│   │   ├── background/    <-- Service Worker (Capture screenshot & state)
│   │   ├── content/       <-- Tracker event klik, form, & Floating Dock
│   │   ├── editor/        <-- Studio Review, Canvas Anotasi & Sensor Blur
│   │   ├── lib/           <-- Database IndexedDB & Engine Ekspor (Word/PPT/PDF)
│   │   └── popup/         <-- UI Menu Ekstensi
│   └── package.json
│
├── web/                   <-- Web Portal & Public Viewer (Next.js 14)
│   ├── src/app/
│   │   ├── page.tsx       <-- Dashboard koleksi semua modul pelatihan
│   │   ├── guide/[id]/    <-- Viewer interaktif (Mode Gulir & Mode Interaktif)
│   │   └── api/workflows/ <-- REST API sinkronisasi dari ekstensi
│   ├── supabase/          <-- Skema SQL database untuk deploy ke Supabase
│   └── package.json
│
└── WALKTHROUGH.md         <-- Dokumen panduan ini
```

---

## 🎯 Panduan Langkah demi Langkah

### 1. Memasang Ekstensi di Browser (Chrome / Edge)

1. Buka browser **Google Chrome** atau **Microsoft Edge**.
2. Masuk ke halaman pengelolaan ekstensi:
   * Chrome: ketik `chrome://extensions` di kolom URL.
   * Edge: ketik `edge://extensions` di kolom URL.
3. Di pojok kanan atas, aktifkan tombol **"Developer Mode"** (Mode Pengembang).
4. Klik tombol **"Load unpacked"** (Muat yang belum dibongkar).
5. Pilih folder:
   ```text
   C:\laragon\www\Record\extension\dist
   ```
6. Ekstensi **StepFlow** sekarang sudah terpasang. Klik ikon *puzzle* di toolbar browser Anda dan sematkan (*pin*) ikon StepFlow agar mudah diakses.

> **Tips:** Jika nanti ada perubahan kode pada ekstensi, Anda cukup klik tombol panah melingkar (*Reload*) 🔄 pada kartu ekstensi StepFlow di `chrome://extensions`.

---

### 2. Cara Merekam Tutorial di Website

1. Buka tab baru di browser dan kunjungi website apa saja yang ingin Anda buatkan tutorialnya (contoh: portal login, form pendaftaran, atau sistem kantor).
2. Klik ikon ekstensi **StepFlow** di toolbar browser.
3. Klik tombol oranye **"Mulai Rekam Alur"**.
4. Di bagian bawah layar website akan muncul **Floating Control Dock** berwarna gelap:
   * 🟠 **Indikator Titik Oranye**: Menunjukkan rekaman sedang aktif dan jumlah langkah yang tercatat.
   * ⏸️ **Tombol Pause**: Untuk menjeda rekaman sementara jika Anda perlu membuka tab pribadi.
   * ✅ **Tombol Selesai**: Untuk menghentikan perekaman dan langsung membuka Studio Editor.
   * 🗑️ **Tombol Sampah**: Untuk membatalkan rekaman.
5. Klik elemen, tombol, atau isi formulir di website target seperti biasa:
   * Setiap klik akan ditandai dengan kedipan bingkai oranye (*ripple effect*).
   * Ekstensi otomatis mengambil screenshot layar dan menghitung posisi elemen yang Anda klik.
6. Setelah selesai, klik tombol **"Selesai"** pada dock di bawah layar.

---

### 3. Mengedit & Menyamarkan Data Sensitif di Studio Editor

Setelah menekan tombol "Selesai", tab **StepFlow Studio** akan terbuka otomatis:

* **Mengubah Judul & Teks Langkah**:
  * Klik pada judul tutorial di bagian atas untuk mengganti nama panduan.
  * Di kolom kanan, Anda bisa menyesuaikan kalimat instruksi langkah dan menambahkan penjelasan detail.
* **Menambahkan Catatan Khusus (Callout)**:
  * Anda bisa memilih tipe catatan: **💡 Tips**, **⚠️ Peringatan**, atau **ℹ️ Info**.
* **Menyensor Data Pribadi / Sensitif (Fitur Blur)**:
  * Jika pada screenshot terdapat data sensitif (seperti email, password, NIK, atau nomor telepon):
  * Klik tombol **"Buramkan Data Sensitif"** di atas gambar.
  * Tarik kursor (*drag mouse*) membentuk kotak pada area data yang ingin disamarkan. Area tersebut akan otomatis menjadi mosaik/blur permanen.
* **Mengatur Urutan Langkah**:
  * Pada daftar langkah di sebelah kiri, gunakan tombol panah **Naik/Turun** untuk menukar urutan atau ikon **Sampah** untuk menghapus langkah yang tidak diperlukan.

---

### 4. Mengekspor ke Word, PowerPoint, dan PDF

Di bagian kanan atas Studio Editor, tersedia 3 tombol ekspor cepat:

1. 📄 **Word (.docx)**:
   * Menghasilkan dokumen Microsoft Word resmi lengkap dengan kop judul, tabel metadata, badge penomoran langkah, callout box, dan screenshot tersemat rapi.
2. 📊 **PowerPoint (.pptx)**:
   * Menghasilkan slide presentasi 16:9 modern. Dilengkapi slide judul pembuka, slide langkah (kolom kiri teks instruksi & kolom kanan screenshot), serta slide penutup.
3. 📑 **Ekspor PDF (.pdf)**:
   * Menghasilkan dokumen PDF A4 terstruktur dengan penomoran halaman otomatis (*Halaman X dari Y*).

Semua dokumen dibuat langsung di browser Anda secara instan (*Client-Side Generation*).

---

### 5. Membagikan Panduan Secara Online ke Teman/Tim

Fitur ini memungkinkan teman atau rekan kerja Anda membuka panduan interaktif melalui link web:

1. Pastikan server web lokal sedang aktif (lihat bagian cara menjalankan server web di bawah).
2. Di Studio Editor ekstensi, klik tombol hijau **"Bagikan Link Online"**.
3. Sistem akan mengunggah data langkah & gambar ke Web App, lalu memunculkan tautan publik (contoh: `http://localhost:3000/guide/[id]`).
4. Tautan otomatis tersalin ke clipboard. Anda tinggal membagikannya ke WhatsApp, Slack, atau email rekan kerja Anda.

---

### 6. Cara Menjalankan & Membuka Web App

Web App StepFlow dibangun menggunakan Next.js. Untuk menjalankannya:

Buka terminal PowerShell dan jalankan perintah berikut:
```powershell
cd c:\laragon\www\Record\web
npm run dev
```
*(Atau gunakan `npm run start` untuk mode produksi).*

Buka browser Anda:
* 🌐 **Dashboard Utama**: [http://localhost:3000](http://localhost:3000)  
  *Menampilkan seluruh daftar panduan yang pernah dibagikan oleh tim.*
* 📖 **Tampilan Panduan Publik**: [http://localhost:3000/guide/tutorial-sample-1](http://localhost:3000/guide/tutorial-sample-1)  
  *Memiliki 2 mode baca: **Mode Gulir** dan **Mode Interaktif (Carousel)*.

---

## ☁️ Panduan Deployment ke Cloud (Akses Publik dari Internet)

Jika Anda ingin aplikasi web ini dapat diakses oleh siapa saja di internet tanpa bergantung pada komputer lokal Anda:

### 1. Database & Storage Gratis (Supabase)
1. Buka [Supabase](https://supabase.com) dan buat proyek baru (Gratis).
2. Buka menu **SQL Editor**, lalu buka dan jalankan seluruh isi file:
   📄 `c:\laragon\www\Record\web\supabase\schema.sql`
3. Ambil URL dan Anon Key di menu *Project Settings -> API*.

### 2. Hosting Web Gratis (Vercel)
1. Unggah folder proyek Anda ke repositori GitHub.
2. Masuk ke [Vercel](https://vercel.com) dan impor repositori tersebut (pilih folder `web` sebagai Root Directory).
3. Masukkan Environment Variables:
   * `NEXT_PUBLIC_SUPABASE_URL` = (URL Supabase Anda)
   * `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (Anon Key Supabase Anda)
4. Klik **Deploy**. Dalam waktu 1 menit, web panduan Anda sudah online di alamat `https://nama-anda.vercel.app`!

### 3. Distribusi Ekstensi ke Teman
* Cukup arsipkan (*zip*) folder `c:\laragon\www\Record\extension\dist`.
* Kirimkan file zip tersebut ke rekan Anda untuk di-load di browser mereka melalui `chrome://extensions`.

---

## 🛠️ Perintah Berguna (Cheatsheet)

| Kebutuhan | Perintah Terminal |
| :--- | :--- |
| **Build Ulang Ekstensi** | `cd extension && npm run build` |
| **Menjalankan Web App (Dev)** | `cd web && npm run dev` |
| **Build Web App untuk Produksi** | `cd web && npm run build` |
| **Menjalankan Web App (Prod)** | `cd web && npm run start` |

---

*StepFlow dikembangkan untuk mempermudah onboarding, pembuatan SOP, dan pelatihan aplikasi digital secara instan dan efisien.*

