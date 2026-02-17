import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// Fix: Cukup gunakan satu defineConfig agar tidak konflik
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Menghubungkan alias folder agar import lebih mudah
      '@': path.resolve(__dirname, './src'),
      // Alias otomatis untuk aset-aset yang diexport dari Figma
      'figma:asset': path.resolve(__dirname, './src/assets'),
      
      // Fix: Alias versi package agar tidak terjadi bentrokan library
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'next-themes@0.4.6': 'next-themes',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',
    },
  },
  build: {
    target: 'esnext',
    // FIX UTAMA: Ubah dari 'build' ke 'dist' supaya Vercel bisa menemukan foldernya
    outDir: 'dist', 
  },
  server: {
    port: 3000,
    open: true,
  },
});
