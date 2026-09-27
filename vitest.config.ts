import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolveAlias = {
  '@': path.resolve(__dirname, './'),
  lib: path.resolve(__dirname, './lib'),
  components: path.resolve(__dirname, './components'),
  app: path.resolve(__dirname, './app'),
}

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: resolveAlias,
  },
  test: {
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '.next/',
        'out/',
        '*.config.js',
        '*.config.ts',
      ],
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'api',
          environment: 'node',
          include: ['app/api/**/*.test.ts'],
        },
      },
      {
        extends: true,
        test: {
          name: 'ui',
          environment: 'jsdom',
          include: ['**/*.{test,spec}.{ts,tsx}'],
          exclude: ['app/api/**/*.test.ts'],
          setupFiles: ['./tests/setup.ts'],
        },
      },
    ],
  },
})
