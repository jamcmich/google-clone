import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), WindiCSS()],
	resolve: {
		alias: {
			'@assets': path.resolve(__dirname, './src/assets/'),
			'@components': path.resolve(__dirname, './src/components/'),
			'@contexts': path.resolve(__dirname, './src/contexts/'),
			'@pages': path.resolve(__dirname, './src/pages/'),
			'@styles': path.resolve(__dirname, './src/styles/'),
			'@utils': path.resolve(__dirname, './src/utils/'),
		},
	},
});

