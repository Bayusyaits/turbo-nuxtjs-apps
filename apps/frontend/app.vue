<template>
	<VitePwaManifest />
	<NuxtLoadingIndicator />
	<component :is="layout">
		<NuxtPage />
	</component>
</template>

<script setup lang="ts">
const layout = computed(() => {
	const { meta } = useRoute()

	return defineAsyncComponent(
		() => import(`./layouts/${meta.layout ?? 'default'}.vue`)
	)
})
</script>
