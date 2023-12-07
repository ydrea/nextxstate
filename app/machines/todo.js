import { createMachine } from 'xstate';

export const todoMachine = createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoAyqCGEAlgHZQDEGxYmJAbqgNbVoY75GkJ2oDGeyhVMQDaABgC6Y8YlAAHVLEIChMkAA9EogDQgAnpoC+BnSyy4CJcmABO11NcyyANvwBm9gLaZTbC5258yiISUqryikGqGggAjACccZgAzHGiABwAbEkALACsokm5mTr6CAC0MaIxmPlp8TlpAOyZSTFGxiDE6HCqpmEKSoLEUYgVGWnZmNkxGRmiuUmNrdMlozNpopiiAEwZMTGNcY2N23lJRiboZuyW-RFDI+Xb1QWN2WlJexmN4zGFq+UYrtMBs0ttRNkCtsivMMhcQD5zBBIHdBiokOpENskls6tCTnFloTmgC3lMCrlTvtcrkYtlso14T4AKK2eyoyIY6LYyaVXIZXJxDKQpJU7akyYi7JCoF5SozJlXTBUADuAAJYMh+GA1TEOQ8MWhZGtBdtMCc5gl8ikNrkdE4wK5kGsshkpjM5gslnSYjoAEaoZBoDwm+nm3aiK0FOK2nTWQhQAAWzsBtLd01m80Wy19IBVhAgyETiCB2hAibACeTiHeOmiY0+7szXpzAIqpvDlri1pj83aBiAA */
	id: 'todo',
	initial: 'Loading',
	states: {
		Loading: {
			invoke: {
				src: 'loadTodos',
				onDone: [{ target: 'Loaded' }],
				onError: [{ target: 'Error' }],
			},
		},
		Loaded: {},
		Error: {},
	},
});
