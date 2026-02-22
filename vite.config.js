import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.webp', '**/*.svg'],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './work_logo'),
        },
    },
})
