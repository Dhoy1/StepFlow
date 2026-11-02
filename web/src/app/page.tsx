import React from 'react';
import Link from 'next/link';
import {
  FileText,
  Search,
  Sparkles,
  ExternalLink,
  PlusCircle,
  Download,
  Share2,
  Calendar,
  Layers,
  ArrowRight
} from 'lucide-react';
import { getAllWorkflows } from '@/lib/serverStore';

export const revalidate = 0; // Always fresh data

export default async function DashboardPage() {
  const workflows = await getAllWorkflows();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 px-6 sm:px-12 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#FF5C35] flex items-center justify-center text-white font-bold text-sm shadow-sm">
            S
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 leading-tight">StepFlow Hub</h1>
            <p className="text-[11px] text-slate-400 font-medium">Koleksi Panduan & Pelatihan Tim</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-500 hover:text-slate-800 font-medium px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Bantuan
          </a>
        </div>
      </nav>

      {/* Hero Banner */}
      <header className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-12 px-6 sm:px-12 text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold">
            <Sparkles size={13} />
            <span>Dokumentasi Otomatis & Pelatihan Tim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pelajari alur aplikasi baru dengan langkah yang jelas.
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            Kumpulan panduan interaktif yang direkam langsung dari browser. Bisa dilihat online atau diunduh dalam format Word, PowerPoint, dan PDF.
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl w-full mx-auto p-6 sm:p-12 flex-1 flex flex-col gap-8">
        {/* Search & Stats Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900">Semua Panduan</h3>
            <span className="text-xs font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">
              {workflows.length} Modul
            </span>
          </div>
        </div>

        {/* Workflow Cards Grid */}
        {workflows.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-slate-200 p-12 text-center flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <FileText size={28} />
            </div>
            <h4 className="text-base font-bold text-slate-800">Belum Ada Panduan yang Dibagikan</h4>
            <p className="text-xs text-slate-400 max-w-md">
              Gunakan ekstensi browser StepFlow untuk merekam alur website, lalu klik tombol "Bagikan Link" di Studio Editor untuk mempublikasikannya ke sini.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflows.map((wf) => (
              <div
                key={wf.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-full">
                      {wf.steps?.length || 0} Langkah
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(wf.createdAt).toLocaleDateString('id-ID')}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {wf.title}
                  </h4>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {wf.description || 'Tidak ada deskripsi'}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Oleh: {wf.author || 'Tim'}
                  </span>
                  <Link
                    href={`/guide/${wf.id}`}
                    className="flex items-center gap-1 text-xs font-bold text-[#FF5C35] hover:underline"
                  >
                    Buka Panduan <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-400">
        StepFlow • Solusi Dokumentasi & Pelatihan Berbasis Web & Ekstensi Browser
      </footer>
    </div>
  );
}

