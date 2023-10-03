// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'
import { DEFAULT_LOCALE, LOCALES } from './config/i18n'
import en from './locales/en.json'
import id from './locales/id.json'

// if (!process.env.VITE_CTP_PROJECT_KEY) {
// 	console.error('🚫 You need to set the .env file')
// }

const { VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_API_KEY } = process.env

export default defineNuxtConfig({
	alias: {
		'@/*': `./*`,
	},
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,

	modules: [
		'@vite-pwa/nuxt',
		'@nuxt/devtools',
		'@vueuse/nuxt',
		[
			'@nuxtjs/i18n',
			{
				seo: true,
				lazy: true,
				langDir: './locales',
				baseUrl:
					process.env.NODE_ENV === 'production' ||
					process.env.NODE_ENV === 'staging'
						? process.env.DASHBOARD_URL
						: 'http://localhost:8082',
				locales: LOCALES,
				defaultLocale: DEFAULT_LOCALE,
				vueI18n: {
					silentTranslationWarn: true,
					fallbackLocale: 'en',
					messages: { en, id },
					numberFormats: {
						en: {
							currency: {
								style: 'currency',
								currency: 'SGD',
								currencyDisplay: 'narrowSymbol',
								maximumFractionDigits: 0,
							},
						},
						id: {
							currency: {
								style: 'currency',
								currency: 'IDR',
								currencyDisplay: 'code',
								maximumFractionDigits: 0,
							},
						},
					},
				},
				detectBrowserLanguage: {
					useCookie: true,
					cookieKey: 'i18n_redirected',
					onlyOnRoot: true, // recommended
				},
			},
		],
		[
			'@pinia/nuxt',
			{
				autoImports: [
					'defineStore', // automatically imports `defineStore`
				],
			},
		],
	],
	debug: false,
	ignore: ['**/*.test.*', '**/*.spec.*'],
	css: ['@/assets/scss/main.scss'],
	app: {
		head: {
			titleTemplate: '%s - Archipelago International',
			title: process.env.APP_NAME,
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "ui/assets/scss/ui-tokens";',
				},
			},
		},
	},
	typescript: {
		typeCheck: true,
		strict: true,
	},
	pwa: {
		registerType: 'autoUpdate',
		manifest: {
			name: 'Archipelago Web',
			short_name: 'Archipelago',
			theme_color: '#ffffff',
			icons: [
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
			],
		},
		workbox: {
			navigateFallback: '/',
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
		},
		client: {
			installPrompt: true,
			// you don't need to include this: only for testing purposes
			// if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
			periodicSyncForUpdates: 20,
		},
		devOptions: {
			enabled: true,
			suppressWarnings: true,
			navigateFallbackAllowlist: [/^\/$/],
			type: 'module',
		},
	},
})
