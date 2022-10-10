import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			external: [
				'firebase-admin/app',
				'firebase-admin/auth',
				'firebase-admin/firestore',
				'firebase-admin/storage',
			]
		}
	},
	ssr: {
		external: [
			'firebase-admin/app',
			'firebase-admin/auth',
			'firebase-admin/firestore',
			'firebase-admin/storage',
		]
	}
};

export default config;
