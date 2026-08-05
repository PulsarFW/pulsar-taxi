<script lang="ts">
	import { taxiState } from './store/taxi.svelte';
	import { METERS_PER_MILE, CurrencyFormat } from '../config';

	const miles = $derived(taxiState.trip / METERS_PER_MILE);
	const fare = $derived(CurrencyFormat.format(Math.ceil(miles * taxiState.rate)));
	const trip = $derived(miles.toFixed(3));
	const rate = $derived(CurrencyFormat.format(taxiState.rate));
</script>

<div class="meter">
	<div class="block fare">
		<div class="header">$ FARE</div>
		<div class="content">{fare}</div>
	</div>
	<div class="block trip">
		<div class="header">TRIP</div>
		<div class="content">{trip}</div>
	</div>
	<div class="block rate">
		<div class="header small">RATE</div>
		<div class="content small">{rate}<small>/mi</small></div>
	</div>
</div>

<style>
	.meter {
		position: absolute;
		bottom: 3vh;
		right: 2vw;
		display: grid;
		grid-template-columns: 2fr 1.6fr 1.2fr;
		width: 30vw;
		max-width: 520px;
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.5);
	}

	.block {
		background: var(--color-panel);
		padding: 0.8vh 0.8vw;
		border-right: 1px solid #1e1e1e;
	}

	.block:last-child {
		border-right: none;
	}

	.header {
		font-size: 1.1vmin;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.header.small {
		font-size: 0.9vmin;
	}

	.content {
		font-family: var(--font-display);
		font-weight: bold;
		text-align: right;
		font-size: 3.2vmin;
		color: var(--color-primary-light);
		text-shadow: 0 0 10px rgba(255, 33, 0, 0.35);
	}

	.content.small {
		font-size: 1.8vmin;
	}

	.content small {
		font-size: 0.9vmin;
		color: var(--color-text-muted);
		margin-left: 0.3vw;
	}
</style>
