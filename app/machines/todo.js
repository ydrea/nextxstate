import {
	assign,
	createMachine, // createActorContext
} from 'xstate';

export const todoMachine = createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoAyqCGEAlgHZQDEGxYmJAbqgNbVoY75GkJ2oDGeyhVMQDaABgC6Y8YlAAHVLEIChMkAA9EARgCsADkwA2UcYDMAFlFnNZ7QCYT2gDQgAnogC0t29swm-mgE5zQIDdbRNbAF9I5xYsXAISckpqbiZMOLZEzm4+ZREJYU1pJBB5RXzVDQRNTVtMUICDANEvHVtNEwNnNwR3bR8DDrMzLotzGzNo2PR49iSyMAAnJdQlzFkAG34AMzWAWwzZrI4oLmJ6PMECyQlVcqVrqo9dAHZMQK7dM1fbIINtDoeh5NKIDJhXqJdJ0DIFtK8zPYDNMQJkAMJLMD8JKYABiBzI+KW+xIsgArsgpPcFI8VKVqppXj5jMZagE7B1Wt1XFoBphdCzbLp2dYTK0oijiOg4Ko4tSKk96SCHB9-t9fv9AU4eX0TDoPlDArowiNviMUZkEqd5bTiM8+mFMPYESYAoy-EFtGZgX0vO8BdD2QZXoF7LZXhbjlbIDbKkqELZjBCmaIIgDjNoDKMfe5QQEGro9Q43jptKI7JHWABRFZrWOK0DVdxmfS2UYGaFiobluo++pGByvPw-WpCkOVrAYrECUj1umNrThzAs0Rsjmg2zc3ruEwFvV-PRM0YWAJTGKo45T7GkPEHOd2+Nt-SvFNCxEODpbxCF3yaDtD7R2VXF8z2iIA */
	context: {
		todos: [],
		errorMessage: '',
		createNew: '',
	},
	// events: [{ type: 'create' }], [{type: ''}]
	id: 'todo',
	initial: 'Loading',
	states: {
		Loading: {
			invoke: {
				src: 'loadTodos',
				onDone: [
					{
						target: 'Loaded',
						actions: 'assignTodosToContext',
					},
					{ target: 'Creating' },
				],
				onError: [
					{
						target: 'Error',
						actions: 'assignErrorToContext',
					},
				],
			},
		},
		Loaded: {},
		Error: {},
		Creating: {
			initial: 'Form',
			states: {
				Form: {
					on: {
						Forminput: {
							actions: 'assignForminputToContext',
						},
					},
				},
			},
		},
	},
	actions: {
		assignTodosToContext: assign((context, event) => {
			return { todos: event.data };
		}),
		assignErrorToContext: assign((_, event) => {
			return { errorMessage: event.data.message };
		}),
		assignForminputToContext: assign((context, event) => {
			return { createNew: event.value };
		}),
	},
});
