import { handleTaxiMessage } from './store/taxi.svelte';

interface InboundMessage {
	type?: string;
	data?: unknown;
}

export function applyMessage(type: string, data: unknown) {
	handleTaxiMessage(type, (data ?? {}) as Record<string, unknown>);
}

export function attachMessageListener(): () => void {
	const handler = (event: MessageEvent<InboundMessage>) => {
		if (!event.isTrusted) return;
		if (event.data?.type) applyMessage(event.data.type, event.data.data);
	};
	window.addEventListener('message', handler);
	return () => window.removeEventListener('message', handler);
}
