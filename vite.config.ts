import preactPlugin from '@preact/preset-vite';
import tailwindCssPlugin from '@tailwindcss/vite';
import { cloudflare } from "@cloudflare/vite-plugin"

import { defineConfig, UserConfig } from 'vite';
import { join } from "path"

// https://vitejs.dev/config/
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineConfig(async ({ mode }) => {
	const cfg: UserConfig = {
		resolve: {
			alias: {
				"@": join(__dirname, "src")
			}
		},
		publicDir: false,
		plugins: [
			tailwindCssPlugin(),
			preactPlugin({
				prerender: {
					enabled: true,
					renderTarget: '#app'
				},
			}),
			cloudflare(),
		],
		build: {
			target: "esnext",
			rollupOptions: {
				output: {
					chunkFileNames: 'assets/js/[name]-[hash].js',
					entryFileNames: 'assets/js/[name]-[hash].js',

					assetFileNames: ({ names: [ name ] }) => {
						if (/\.(gif|jpe?g|png|svg|webp)$/.test(name)) {
							return 'assets/images/[name]-[hash][extname]';
						}

						if (/\.css$/.test(name)) {
							return 'assets/css/[name]-[hash][extname]';
						}
						return 'assets/[name]-[hash][extname]';
					},

					manualChunks(id) {
						if (id.includes("/node_modules/"))
							return "vendor"
							
						return null
					}
				},
			},
		}
	}
	
	// prod only (currently unused)
	// if (mode === "production") {

	// }
	
	return cfg
});
