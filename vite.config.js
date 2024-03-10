import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	preview: {
		port: 3000,
		strictPort: true,
	},
	server: {
		port: 3000,
		strictPort: true,
	},
});
