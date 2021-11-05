import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import plugin from 'vite-plugin-ssr-ssg'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': join(__dirname, './src'),
		},
	},
	plugins: [
		vue(),
		plugin({
			generate: {
			}
		})
	]
})
