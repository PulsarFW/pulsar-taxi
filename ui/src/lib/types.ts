export interface TaxiState {
	hidden: boolean;
	rate: number;
	trip: number; // accumulated distance, meters
}
