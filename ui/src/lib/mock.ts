import { applyMessage } from './messages';

export function startMock(): void {
	setTimeout(() => {
		applyMessage('APP_SHOW', { rate: 10 });
	}, 300);

	setInterval(() => {
		applyMessage('UPDATE_TRIP', { trip: 15 }); // ~15m/s, roughly city driving speed
	}, 1000);
}
