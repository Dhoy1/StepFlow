import React from 'react';
import { Play, Pause, Check, Trash2, Video } from 'lucide-react';
import type { RecordingStatus } from '../types';

interface FloatingDockProps {
  status: RecordingStatus;
  stepCount: number;
  onPause: () => void;
  onResume: () => void;
  onComplete: () => void;
  onDiscard: () => void;
}

export const FloatingDock: React.FC<FloatingDockProps> = ({
  status,
  stepCount,
  onPause,
  onResume,
  onComplete,
  onDiscard
}) => {
  if (status === 'idle') return null;

  const isRecording = status === 'recording';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2147483647, // Maximum z-index
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif'
      }}
      className="stepflow-dock-container"
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: '#1E1E24',
          color: '#FFFFFF',
          padding: '8px 16px',
          borderRadius: '9999px',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          userSelect: 'none'
        }}
      >
        {/* Status indicator & badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '8px', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: isRecording ? '#FF5C35' : '#EAB308',
              boxShadow: isRecording ? '0 0 10px #FF5C35' : 'none',
              animation: isRecording ? 'stepflow-pulse 1.5s infinite' : 'none'
            }}
          />
          <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.02em', color: '#F8F9FA' }}>
            {stepCount} Langkah
          </span>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {isRecording ? (
            <button
              onClick={onPause}
              title="Jeda Rekaman"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)')}
            >
              <Pause size={15} />
            </button>
          ) : (
            <button
              onClick={onResume}
              title="Lanjutkan Rekaman"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#FF5C35',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'opacity 0.2s'
              }}
            >
              <Play size={15} />
            </button>
          )}

          {/* Selesai / Finish Button */}
          <button
            onClick={onComplete}
            title="Selesaikan & Buka Editor"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              height: '32px',
              padding: '0 14px',
              borderRadius: '9999px',
              backgroundColor: '#10B981',
              border: 'none',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'filter 0.2s',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.filter = 'none')}
          >
            <Check size={15} strokeWidth={2.5} />
            <span>Selesai</span>
          </button>

          {/* Discard Button */}
          <button
            onClick={onDiscard}
            title="Batalkan Rekaman"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'transparent',
              border: 'none',
              color: '#9CA3AF',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#EF4444')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

