import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');

async function buildAll() {
  console.log('🚀 Starting StepFlow Extension Build...');

  // Ensure clean dist directory
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist, { recursive: true });
  }

  // 1. Build HTML apps: popup.html & editor.html
  console.log('📦 [1/3] Building Popup and Editor UI...');
  await build({
    root,
    plugins: [react()],
    base: '',
    build: {
      outDir: dist,
      emptyOutDir: false,
      rollupOptions: {
        input: {
          popup: resolve(root, 'popup.html'),
          editor: resolve(root, 'editor.html')
        },
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name].[ext]'
        }
      }
    }
  });

  // 2. Build Background Service Worker (ES module)
  console.log('⚙️ [2/3] Building Background Service Worker...');
  await build({
    root,
    build: {
      outDir: dist,
      emptyOutDir: false,
      lib: {
        entry: resolve(root, 'src/background/index.ts'),
        name: 'Background',
        formats: ['es'],
        fileName: () => 'background.js'
      }
    }
  });

  // 3. Build Content Script (IIFE for isolated execution in web pages)
  console.log('🎯 [3/3] Building Content Script & Styles...');
  await build({
    root,
    plugins: [react()],
    build: {
      outDir: dist,
      emptyOutDir: false,
      lib: {
        entry: resolve(root, 'src/content/index.tsx'),
        name: 'StepFlowContent',
        formats: ['iife'],
        fileName: () => 'content.js'
      },
      rollupOptions: {
        output: {
          extend: true
        }
      }
    },
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }
  });

  // 4. Copy manifest and icons from public to dist
  const publicDir = resolve(root, 'public');
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, dist, { recursive: true });
    console.log('📋 Manifest and static assets copied to dist/');
  }

  console.log('✅ StepFlow Extension Build Complete! Output: dist/');
}

buildAll().catch((err) => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});

