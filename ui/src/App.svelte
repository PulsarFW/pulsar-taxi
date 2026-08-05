<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { attachMessageListener } from './lib/messages';
	import { taxiState } from './lib/store/taxi.svelte';
	import Meter from './lib/Meter.svelte';

	onMount(() => attachMessageListener());
</script>

<main>
	{#if !taxiState.hidden}
		<div transition:fade={{ duration: 200 }}>
			<Meter />
		</div>
	{/if}
</main>

<style>
	main {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
</style>
