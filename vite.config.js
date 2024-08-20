import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [react()],
// })
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/components/index.tsx'),
            name: 'Try-Ui-Core-Component',
            fileName: 'try-ui-core-component',
            // formats: ['es', 'umd'],
            // fileName: (format) => `try-ui-core-component.${format}.js`
        },
        rollupOptions: {
            external: [
                'react',
                'react-dom',
                '@mui/material',
                '@emotion/react',
                '@emotion/styled',
                '@mui/joy',
            ],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI',
                    '@emotion/react': 'EmotionReact',
                    '@emotion/styled': 'EmotionStyled',
                    '@mui/joy': 'MUIJoy',
                },
            },
        },
    },
    plugins: [react(), dts({ outDir: 'dist', insertTypesEntry: true })],
})
