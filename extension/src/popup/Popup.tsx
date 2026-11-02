import React, { useEffect, useState } from 'react';
import { Play, Pause, Square, ExternalLink, Clock, FileText, ChevronRight, Sparkles } from 'lucide-react';
import { getAllWorkflows } from '../lib/db';
import type { Workflow, RecordingStatus } from '../types';

export const Popup: React.FC = () => {
  const [status, setStatus] = useState<RecordingStatus>('idle');
  const [stepCount, setStepCount] = useState(0);
  const [activeTabTitle, setActiveTabTitle] = useState('');
  const [recentWorkflows, setRecentWorkflows] = useState<Workflow[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Get recording status
    chrome.runtime.sendMessage({ type: 'GET_STATUS' }, (res) => {
      if (res) {
        setStatus(res.status || 'idle');
        setStepCount(res.stepCount || 0);
      }
    });

    // 2. Query active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        setActiveTabTitle(tabs[0].title || 'Tab saat ini');
      }
    });

    // 3. Load recent workflows from IndexedDB
    loadWorkflows();
  }, []);

  const loadWorkflows = async () => {
    try {
      const list = await getAllWorkflows();
      setRecentWorkflows(list.slice(0, 3));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = () => {
    chrome.runtime.sendMessage({ type: 'START_RECORDING' }, (res) => {
      if (res && res.status) {
        setStatus(res.status);
        window.close(); // Close popup so user can interact with page
      }
    });
  };

  const stopRecording = () => {
    chrome.runtime.sendMessage({ type: 'STOP_RECORDING' }, (res) => {
      if (res && res.workflowId) {
        setStatus('idle');
        window.close();
      }
    });
  };

  const openEditor = (id?: string) => {
    chrome.runtime.sendMessage({ type: 'OPEN_EDITOR', payload: { id } });
    window.close();
  };

  return (
    <div className="flex flex-col min-h-[460px] bg-slate-50 text-slate-800">
      {/* Top Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#FF5C35] to-[#FF8C66] flex items-center justify-center text-white font-bold text-sm shadow-sm">
            S
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-slate-900 leading-tight">StepFlow</h1>
            <p className="text-[10px] text-slate-400 font-medium">Tango Workflow Recorder</p>
          </div>
        </div>
        <button
          onClick={() => openEditor()}
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium px-2 py-1 rounded hover:bg-slate-100 transition-colors"
        >
          Studio <ExternalLink size={12} />
        </button>
      </div>

      {/* Main Action Section */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        {status === 'recording' || status === 'paused' ? (
          /* Ongoing Recording Card */
          <div className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-semibold text-orange-600 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                {status === 'recording' ? 'Sedang Merekam' : 'Dijeda'}
              </span>
              <span className="text-xs font-bold bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                {stepCount} Langkah
              </span>
            </div>

            <p className="text-xs text-slate-500 line-clamp-1">
              Target: <span className="text-slate-700 font-medium">{activeTabTitle}</span>
            </p>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={stopRecording}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all"
              >
                <Square size={13} fill="currentColor" /> Selesai
              </button>
              <button
                onClick={() => {
                  chrome.runtime.sendMessage({
                    type: status === 'recording' ? 'PAUSE_RECORDING' : 'RESUME_RECORDING'
                  }, (res) => {
                    setStatus(res.status);
                  });
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-all"
              >
                {status === 'recording' ? (
                  <>
                    <Pause size={13} /> Jeda
                  </>
                ) : (
                  <>
                    <Play size={13} fill="currentColor" /> Lanjut
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          /* Ready to Record Card */
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm flex flex-col gap-3">
              <div className="text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Halaman Aktif:</span>
                <p className="font-medium text-slate-800 line-clamp-1 mt-0.5">{activeTabTitle || 'Memuat tab...'}</p>
              </div>

              <button
                onClick={startRecording}
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl bg-[#FF5C35] hover:bg-[#E54A24] text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <Play size={16} fill="currentColor" />
                Mulai Rekam Alur
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <Sparkles size={12} className="text-amber-500" />
                <span>Otomatis menangkap klik & screenshot</span>
              </div>
            </div>
          </div>
        )}

        {/* Recent Workflows */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Panduan Terakhir</span>
            <button onClick={() => openEditor()} className="text-[11px] text-orange-600 hover:underline font-medium">
              Lihat Semua
            </button>
          </div>

          <div className="space-y-1.5">
            {recentWorkflows.length === 0 ? (
              <div className="bg-white rounded-lg p-3 text-center border border-dashed border-slate-200">
                <p className="text-xs text-slate-400">Belum ada panduan tersimpan.</p>
              </div>
            ) : (
              recentWorkflows.map((wf) => (
                <div
                  key={wf.id}
                  onClick={() => openEditor(wf.id)}
                  className="flex items-center justify-between p-2.5 bg-white hover:bg-slate-50 rounded-lg border border-slate-200 cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                      <FileText size={14} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-semibold text-slate-800 truncate group-hover:text-orange-600">
                        {wf.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 flex items-center gap-1.5">
                        <span>{wf.steps.length} langkah</span>
                        <span>•</span>
                        <span>{new Date(wf.createdAt).toLocaleDateString('id-ID')}</span>
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-slate-600 transition-colors" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 bg-white border-t border-slate-200 text-center">
        <p className="text-[10px] text-slate-400">
          Ekspor langsung ke <span className="font-semibold text-slate-600">Word (.docx)</span>,{' '}
          <span className="font-semibold text-slate-600">PowerPoint (.pptx)</span>, &{' '}
          <span className="font-semibold text-slate-600">PDF</span>
        </p>
      </div>
    </div>
  );
};

