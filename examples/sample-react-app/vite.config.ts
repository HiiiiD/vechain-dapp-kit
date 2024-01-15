import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
    plugins: [nodePolyfills(), react()],
    base:
        process.env.NODE_ENV === 'production'
            ? '/vechain-dapp-kit/react/'
            : '/',
});