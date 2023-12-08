import {
	assign,
	createMachine, // createActorContext
} from 'xstate';

export const todosMachine = createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoAyqCGEAlgHZQDEGxYmJAbqgNbVoY75GkJ2oDGeyhVMQDaABgC6Y8YlAAHVLEIChMkAA9EAWgDsANkwBWbQdEAmABzmAnLvO7tFgDQgAnonOjM57QBYr28yNRYJ9dAGYAXwjnFixcAhJySmpuJkxYtgTObj5lEQlhAEZpJBB5RTzVDQRTUwNMXUbzQoNC0Us7MO1nNwQ2sIarIe0rUzDg3SsWqJj0OPZEsjAAJ2XUZcxZABt+ADN1gFt0ucyOKC5ielzBfMkJVXKlG6qtU10fTEKh-xtLUWGDD1XqYvHVgqJGhMfK0ZiAMgBhZZgfiJTAAMUOZAxywOJFkAFdkFIHgonipStU6oVDKYrONCi1CtowqYgQhxtpMHSwqEfIUfO0fL4otEQMR0HBVLESRVnhStGFCiCvsNfh4AWzNAyQbpwaIDOYwpNmQZYRl4mcZWTiC8EJoDZg9aJoYFxqIwpq6pg3cFFT5oT5LDYzScLZArZV5XaBY7wT5aUqPIVLGzTBDY4azFZ40N+boQ6wAKKrdYRuWgaqaUz+zAC4KFSb+oY+MLmNltakjVWhQphDlWAtYRHIgSkMvkiuINMDAy0+mM5ms1yIBsfQ089r2bT8+P50UIpEo0jow7jm1Rln6JV01q0qx2Tqp2efPt8tqmBkC-wiiJAA */
	context: {
		todos: [],
		errorMessage: '',
		createNew: '',
	},
	// events: [{ type: 'create' }], [{type: 'Forminput'}],
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
					{ target: 'Creating', actions: 'assignForminputToContext' },
				],
				onError: [
					{
						target: 'Error',
						actions: 'assignErrorToContext',
					},
				],
			},
		},
		Error: {},
		Loaded: {},
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
