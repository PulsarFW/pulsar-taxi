import type { TaxiState } from '../types';

const DEFAULT_STATE: TaxiState = {
	hidden: true,
	rate: 10,
	trip: 0,
};

export const taxiState = $state<TaxiState>({ ...DEFAULT_STATE });

export function handleTaxiMessage(type: string, data: Record<string, unknown>) {
	switch (type) {
		case 'APP_SHOW':
			taxiState.hidden = false;
			taxiState.rate = (data.rate as number) ?? taxiState.rate;
			taxiState.trip = 0;
			break;
		case 'APP_HIDE':
			taxiState.hidden = true;
			break;
		case 'APP_RESET':
			Object.assign(taxiState, DEFAULT_STATE);
			break;
		case 'SET_RATE':
			taxiState.rate = (data.rate as number) ?? taxiState.rate;
			break;
		case 'RESET_TRIP':
			taxiState.trip = 0;
			break;
		case 'UPDATE_TRIP':
			taxiState.trip += (data.trip as number) ?? 0;
			break;
	}
}
