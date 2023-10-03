<template>
	<main class="main">
		<TheHeader class="header-container" />
		<slot />
		<ClientOnly>
			<div v-html="JSON.stringify($pwa)"></div>
			<div
				v-if="$pwa?.offlineReady || $pwa?.needRefresh"
				class="pwa-toast"
				role="alert"
			>
				<div class="message">
					<span v-if="$pwa.offlineReady"> App ready to work offline </span>
					<span v-else>
						New content available, click on reload button to update.
					</span>
				</div>
				<button v-if="$pwa.needRefresh" @click="$pwa.updateServiceWorker()">
					Reload
				</button>
				<button @click="$pwa.cancelPrompt()">Close</button>
			</div>
			<div
				v-if="
					$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh
				"
				class="pwa-toast"
				role="alert"
			>
				<div class="message">
					<span> Install PWA </span>
				</div>
				<button @click="$pwa.install()">Install</button>
				<button @click="$pwa.cancelInstall()">Cancel</button>
			</div>
		</ClientOnly>
	</main>
</template>

<script lang="ts" setup>
import { TheHeader } from 'ui'
const { $pwa } = useNuxtApp()

useHead({
	title: 'Model management',
	meta: [
		{
			name: 'description',
			content: 'Model management description',
		},
	],
	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
})
</script>

<style lang="scss">
.main {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
}

.header-container {
	width: 100%;
	z-index: 3;
	background-color: get-color('white');
}
.pwa-toast {
	position: fixed;
	right: 0;
	bottom: 0;
	margin: 16px;
	padding: 12px;
	border: 1px solid #8885;
	border-radius: 4px;
	z-index: 1;
	text-align: left;
	box-shadow: 3px 4px 5px 0 #8885;
}
.pwa-toast .message {
	margin-bottom: 8px;
}
.pwa-toast button {
	border: 1px solid #8885;
	outline: none;
	margin-right: 5px;
	border-radius: 2px;
	padding: 3px 10px;
}
</style>
