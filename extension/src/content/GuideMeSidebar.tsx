import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Users,
  Compass,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  X
} from 'lucide-react';
import type { Workflow, Step } from '../types';

interface GuideMeSidebarProps {
  workflow: Workflow;
  onExit: () => void;
  onStartGuiding: () => void;
  isGuiding?: boolean;
  activeStepIndex?: number;
  isPaused?: boolean;
  onPauseToggle?: () => void;
  onNextStep?: () => void;
  onPrevStep?: () => void;
}

export const GuideMeSidebar: React.FC<GuideMeSidebarProps> = ({
  workflow,
  onExit,
  onStartGuiding,
  isGuiding = false,
  activeStepIndex = 0,
  isPaused = false,
  onPauseToggle,
  onNextStep,
  onPrevStep
}) => {
  const steps = workflow.steps || [];
  const currentStep = steps[activeStepIndex] || steps[0];
  const nextStep = steps[activeStepIndex + 1];

  // Get author initials
  const initials = (workflow.author || 'Tim')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        width: '380px',
        height: '100vh',
        backgroundColor: '#FFFFFF',
        borderLeft: '1px solid #E2E8F0',
        boxShadow: '-6px 0 25px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        color: '#0F172A',
        userSelect: 'none',
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 2147483647
      }}
    >
      {/* 1. Top Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          borderBottom: '1px solid #F1F5F9'
        }}
      >
        <button
          onClick={onExit}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'none',
            border: 'none',
            color: '#64748B',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '6px 10px',
            borderRadius: '8px',
            transition: 'background-color 0.15s'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          title="Tutup mode panduan dan kembalikan layar normal"
        >
          <ArrowLeft size={16} />
          <span>Exit</span>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#7C3AED',
              backgroundColor: '#F3E8FF',
              padding: '2px 8px',
              borderRadius: '9999px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            StepFlow Guide
          </span>
        </div>
      </div>

      {/* 2. Scrollable Body */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {/* Header Title & Author */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: '#7C3AED',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700
              }}
            >
              {initials}
            </div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#475569' }}>
              {workflow.author || 'Tim Perusahaan'}
            </span>
          </div>

          <h2
            style={{
              fontSize: '20px',
              fontWeight: 800,
              lineHeight: '1.3',
              color: '#0F172A',
              margin: 0
            }}
          >
            {workflow.title}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                fontWeight: 600,
                color: '#64748B',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                padding: '4px 10px',
                borderRadius: '8px'
              }}
            >
              <Users size={13} color="#94A3B8" />
              {steps.length} manual steps
            </span>

            {isGuiding && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: isPaused ? '#D97706' : '#059669',
                  backgroundColor: isPaused ? '#FEF3C7' : '#D1FAE5',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}
              >
                {isPaused ? '⏸ Dijeda' : '● Panduan Aktif'}
              </span>
            )}
          </div>
        </div>

        {/* 3. MODE A: Initial View Before Guiding (Sesuai Foto 2) */}
        {!isGuiding ? (
          <>
            {/* Primary Action Button */}
            <button
              onClick={onStartGuiding}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                backgroundColor: '#7C3AED',
                color: '#FFFFFF',
                borderRadius: '14px',
                border: 'none',
                fontSize: '15px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(124, 58, 237, 0.3)',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6D28D9';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#7C3AED';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Guide me on this page</span>
              <ArrowRight size={18} />
            </button>

            {/* Steps Preview List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '4px' }}>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#94A3B8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Langkah Tutorial
              </div>

              {steps.slice(0, 3).map((st, idx) => (
                <div
                  key={st.id || idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    padding: '12px',
                    borderRadius: '12px',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#FF5C35',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        fontWeight: 700
                      }}
                    >
                      {idx + 1}
                    </span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B' }}>
                      {st.title}
                    </span>
                  </div>

                  {(st.annotatedScreenshot || st.screenshot) && (
                    <div
                      style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: '1px solid #E2E8F0',
                        backgroundColor: '#FFFFFF',
                        height: '90px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img
                        src={st.annotatedScreenshot || st.screenshot}
                        alt={st.title}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                  )}
                </div>
              ))}

              {steps.length > 3 && (
                <div style={{ textAlign: 'center', fontSize: '12px', color: '#94A3B8' }}>
                  + {steps.length - 3} langkah lainnya
                </div>
              )}
            </div>
          </>
        ) : (
          /* 4. MODE B: Active Interactive Guiding View (Sesuai Foto 3) */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Paused Banner Notification (Clarification 3) */}
            {isPaused && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 14px',
                  borderRadius: '12px',
                  backgroundColor: '#FEF3C7',
                  border: '1px solid #F59E0B',
                  color: '#92400E',
                  boxShadow: '0 2px 8px rgba(245, 158, 11, 0.15)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Pause size={16} />
                  <span style={{ fontSize: '12px', fontWeight: 700 }}>
                    Panduan Dijeda
                  </span>
                </div>
                <button
                  onClick={onPauseToggle}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 12px',
                    backgroundColor: '#D97706',
                    color: '#FFFFFF',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '11px',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  <Play size={12} />
                  <span>Lanjutkan</span>
                </button>
              </div>
            )}

            {/* Step instruction card */}
            <div
              style={{
                padding: '16px',
                borderRadius: '16px',
                backgroundColor: '#F8FAFC',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: '#FF5C35',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}
                >
                  {activeStepIndex + 1}
                </span>
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: '15px',
                      fontWeight: 700,
                      color: '#0F172A',
                      lineHeight: '1.4'
                    }}
                  >
                    {currentStep?.title}
                  </h3>
                  <p
                    style={{
                      margin: '4px 0 0 0',
                      fontSize: '12px',
                      color: '#64748B',
                      lineHeight: '1.4'
                    }}
                  >
                    {currentStep?.description || "It's your move! Complete the action to keep moving forward."}
                  </p>
                </div>
              </div>

              {/* Step Image */}
              {(currentStep?.annotatedScreenshot || currentStep?.screenshot) && (
                <div
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid #CBD5E1',
                    maxHeight: '140px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={currentStep.annotatedScreenshot || currentStep.screenshot}
                    alt={currentStep.title}
                    style={{ maxWidth: '100%', maxHeight: '140px', objectFit: 'contain' }}
                  />
                </div>
              )}

              {/* Mark as complete button */}
              <button
                onClick={onNextStep}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 16px',
                  backgroundColor: '#7C3AED',
                  color: '#FFFFFF',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'background-color 0.15s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6D28D9')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#7C3AED')}
              >
                <CheckCircle2 size={16} />
                <span>Mark as complete</span>
              </button>
            </div>

            {/* Next step preview if exists */}
            {nextStep && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  borderRadius: '12px',
                  backgroundColor: '#FFFFFF',
                  border: '1px dashed #CBD5E1',
                  color: '#94A3B8',
                  fontSize: '13px'
                }}
              >
                <span
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: '2px solid #CBD5E1',
                    display: 'inline-block'
                  }}
                />
                <span style={{ fontWeight: 500, color: '#64748B' }}>
                  {nextStep.title}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 5. Bottom Navigation Bar */}
      <div
        style={{
          padding: '14px 20px',
          borderTop: '1px solid #F1F5F9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#FAFAFA'
        }}
      >
        {isGuiding ? (
          <>
            <button
              onClick={onPauseToggle}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                backgroundColor: isPaused ? '#FEF3C7' : '#F1F5F9',
                color: isPaused ? '#B45309' : '#475569',
                borderRadius: '8px',
                border: 'none',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {isPaused ? <Play size={14} /> : <Pause size={14} />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>

            <span style={{ fontSize: '12px', fontWeight: 600, color: '#94A3B8' }}>
              {activeStepIndex + 1} / {steps.length}
            </span>
          </>
        ) : (
          <div style={{ fontSize: '11px', color: '#94A3B8', textAlign: 'center', width: '100%' }}>
            Klik &quot;Guide me on this page&quot; untuk memulai tutorial langsung di web.
          </div>
        )}
      </div>
    </div>
  );
};

