import App from './App.vue'
import { createSSRApp, App as app } from 'vue'
import {
	createMemoryHistory,
	createRouter,
	createWebHistory,
	Router
} from 'vue-router'
import { getRoutes } from 'vite-plugin-ssr-ssg'
import { createHead, HeadClient } from '@vueuse/head'
import i18n from '../plugins/i18n'
import gtm from '../plugins/gtm'
import Particles from 'particles.vue3'

const pages = import.meta.globEager('./pages/**/*.vue')
const routes = getRoutes<'vue'>(pages)

export const createApp = (): {
  app: app<Element>
  router: Router
  head: HeadClient
} => {
	const app = createSSRApp(App)
	const router = createRouter({
		history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
		routes
	})
	const head = createHead()
	app.use(router).use(head).use(i18n).use(Particles)
	return { app, router, head }
}

const { app, router } = createApp()

router.isReady().then(() => {
	app.mount('#app')
	i18n.global.locale = navigator.language
})
