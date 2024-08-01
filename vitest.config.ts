import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  test: {
    css: true,
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      enabled: true,
      include: ['src/**/*'],
      exclude: ['src/routeTree.gen.ts'],
    },
    typecheck: {
      enabled: true,
    },
  },
});
