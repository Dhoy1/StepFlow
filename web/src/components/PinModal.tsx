'use client';

import React, { useState, useEffect } from 'react';
import { Lock, KeyRound, X, CheckCircle2, AlertCircle, User } from 'lucide-react';
import { loginWithPin, getStoredEditorName } from '@/lib/auth';

interface PinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PinModal: React.FC<PinModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [pin, setPin] = useState('');
  const [editorName, setEditorName] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEditorName(getStoredEditorName() || '');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginWithPin(pin, editorName)) {
      setError(false);
      setPin('');
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl border border-slate-100 flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#FF5C35] flex items-center justify-center">
              <Lock size={18} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">Akses Editor Tim</h3>
              <p className="text-[11px] text-slate-400">Masukkan PIN & Nama untuk mengedit panduan.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-semibold text-slate-600">Nama Anda (Editor):</label>
            <div className="relative">
              <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Contoh: Budi Santoso"
                value={editorName}
                onChange={(e) => setEditorName(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[11px] font-semibold text-slate-600">PIN Tim:</label>
            <div className="relative">
              <KeyRound size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                maxLength={10}
                placeholder="Contoh: 1234"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value);
                  setError(false);
                }}
                autoFocus
                className={`w-full pl-9 pr-3 py-2 bg-slate-50 border rounded-xl text-sm font-semibold tracking-wider text-slate-800 focus:outline-none focus:ring-2 ${
                  error
                    ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/30'
                    : 'border-slate-200 focus:ring-orange-500'
                }`}
              />
            </div>
            {error && (
              <span className="text-[11px] text-rose-500 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle size={12} /> PIN salah, silakan hubungi admin tim.
              </span>
            )}
          </div>

          <div className="text-[11px] text-slate-400 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            🔒 <strong>Catatan Privasi:</strong> Nama editor dan log riwayat hanya bisa dilihat oleh anggota tim yang memiliki PIN ini, dan tersembunyi dari pembaca umum.
          </div>

          <div className="flex items-center justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-xl"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#FF5C35] hover:bg-[#E54A24] text-white text-xs font-bold rounded-xl shadow-sm transition-all"
            >
              Buka Akses Editor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

