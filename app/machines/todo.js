// // import {
// // 	assign,
// // 	createMachine, // createActorContext
// // } from 'xstate';

// // export const todoMachine = createMachine({
// // 	/** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUDoAyqCGEAlgHZQDEGxYmJAbqgNbVoY75GkJ2oDGeyhVMQDaABgC6Y8YlAAHVLEIChMkAA9EARgAs2zAHYArAE5jAJlHGAbFe3HDAZjMAaEAE9EAWjNXDmO2aaVmbG2ppBooYAvlGuLFi4BCTklNTcTJjxbEmc3HzKIhLCmtJIIPKKBaoaCJoOxpiiABxBTZFW+mYtLu5eTQ3aZkbG4ZqGhr4O0bEgWYkc5GAATkuoS5iyADb8AGZrALaZ6AnsyVzE9PmChZISqhVK19V9+piaxg5WTdqdH75jrg8CE8mlEVgMzTqVnehn0g0+MTix0wAGElmB+MlMAAxA5kXFLfYkWQAV2QUnuCkeKjKNU0+ledlh2g6+iaDiaHUMgK0DgcBnMojZPysDn0xn0MRmxHQcFU8UplSetK8dT870+31+n0MAN6wKmZgFgX0lm0sLBosRs2R82SiupxGewKafjMYu09XpfI+hm0POBZiGmDaLXsHXe7qG1rm7EgDqqKtqnMwHzsUwZTTZoSaAZBP387xZxm+JlEQRjyIAois1gnlaAap5tE1MGZPV86mCLLqekCjVZRBm+T9wl19JpK6w0RiBKR6zTG1oQv57HDWezOUY82Y-KZQW1uyZ6lYp1gZ5jSDiDgunUnd5o26b9KL29YS5oA9DMA5muYHOEpgRsYUpREAA */
// // 	context: {
// // 		todos: [],
// // 		errorMessage: '',
// // 		createNew: '',
// // 	},
// // 	events: [{ type: 'create' }], [{type: 'Forminput'}],
// // 	id: 'todo',
// // 	initial: 'Loading',
// // 	states: {
// // 		Loading: {
// // 			invoke: {
// // 				src: 'loadTodos',
// // 				onDone: [
// // 					{
// // 						target: 'Loaded',
// // 						actions: 'assignTodosToContext',
// // 					},
// // 					{ target: 'Creating' },
// // 				],
// // 				onError: [
// // 					{
// // 						target: 'Error',
// // 						actions: 'assignErrorToContext',
// // 					},
// // 				],
// // 			},
// // 		},
// // 		Loaded: {},
// // 		Error: {},
// // 		Creating: {
// // 			initial: 'Form',
// // 			states: {
// // 				Form: {
// // 					on: {
// // 						Forminput: {
// // 							actions: 'assignForminputToContext',
// // 						},
// // 					},
// // 				},
// // 			},
// // 		},
// // 	},
// // 	actions: {
// // 		assignTodosToContext: assign((context, event) => {
// // 			return { todos: event.data };
// // 		}),
// // 		assignErrorToContext: assign((_, event) => {
// // 			return { errorMessage: event.data.message };
// // 		}),
// // 		assignForminputToContext: assign((context, event) => {
// // 			return { createNew: event.value };
// // 		}),
// // 	},
// // });

// import { assign, createMachine } from 'xstate';

// export const todoMachine = createMachine({
// 	/** @xstate-layout N4IgpgJg5mDOIC5QBcD2FUGIDGAnMAhsmANoAMAuoqAA6qwCWyDqAdtSAB6ICsA7ABoQAT0QAWMTwB0ZAEx8yfWQA4AbLICMGngE4AvnqFoMmAGKpcAWwasaAV2TkqSEHUbM2HbglWqNMvh0yAGZVZWUyHQ0lIVEEWV8pFQ1ZWSixYJ5IsQMjdFQpABlUAggbKEwMVjApGwA3VABrGuMC4tLyhHrUbCIWVicnDjcmfq9EWR5lJJ1ZnVVMsQ1IwREJ1T4pdSyyMmi+DeUNXJBWopKy1gqqmu7mqTP2y6gu1gbejwHKEg1nWnpRp4XN5ZGJpmk5gseEtIqoeLFxIotnwFAs+Mogjx1CdHhdypgwLhcBYpDQADZEABmFksD3y5w6V1e7z6bEGlGGAM+43iUxmkMWyx0qzi0Wk80mcmU6NUYOiOPpAGF8H0rlJzFYzDSbPZHByXCNucDEAsyFIYbJgikEtLUgiEFizXwxDolhp1GC9jwDIYQKx0HAOK1Oe4xsaEDp7eEtttFKDQZIyKoFRgGc8Q4D2OH+PaNK6pPNpcEdKE8+FgsoU20LpAM0bQN5JDoki6dMpdJFoRt7SppqiEiFVHs0pMq1IAKJEix1sMN8Q8YJScJ8LI6UE8eR8YLBXPCmQZA7BJNCkvBMfKwjMK4zoFzh3KWTm5aW61hJSye1iLfml0ZXzOsRfFdc8VSvKB1RpG8szvVQggLdE2wlSIokjNYfCHJ8800FQ11dPgfT0IA */
// 	context: {
// 		todos: [],
// 		errorMessage: '',
// 		createNew: '',
// 	},
// 	id: 'todo',
// 	initial: 'Loading',
// 	states: {
// 		Loading: {
// 			invoke: {
// 				src: 'loadTodos',
// 				onDone: [
// 					{
// 						target: 'Loaded',
// 						actions: 'assignTodosToContext',
// 					},
// 					{ target: 'Creating' },
// 				],
// 				onError: [
// 					{
// 						target: 'Error',
// 						actions: 'assignErrorToContext',
// 					},
// 				],
// 			},
// 		},
// 		Loaded: {},
// 		Error: {},
// 		Creating: {
// 			initial: 'Form',
// 			states: {
// 				Form: {
// 					on: {
// 						Forminput: {
// 							actions: 'assignForminputToContext',
// 						},
// 					},
// 				},
// 			},
// 		},
// 	},
// 	on: {
// 		create: { target: 'Creating' },
// 		Forminput: { actions: 'assignForminputToContext' },
// 	},
// 	actions: {
// 		assignTodosToContext: assign((context, event) => {
// 			return { todos: event.data };
// 		}),
// 		assignErrorToContext: assign((_, event) => {
// 			return { errorMessage: event.data.message };
// 		}),
// 		assignForminputToContext: assign((context, event) => {
// 			return { createNew: event.value };
// 		}),
// 	},
// });
import { createMachine, assign } from 'xstate';

export const todosMachine = createMachine(
	{
		context: {
			todos: [],
			errorMessage: undefined,
			createNewTodoFormInput: '',
		},
		schema: {
			services: {
				loadTodos: {
					data: [],
				},
				saveTodo: {
					data: undefined,
				},
				deleteTodo: {
					data: undefined,
				},
			},
			events: {
				type: 'Create new',
			},
		},
		id: 'Todo machine',
		initial: 'Loading Todos',
		states: {
			'Loading Todos': {
				invoke: {
					src: 'loadTodos',
					onDone: [
						{
							actions: 'assignTodosToContext',
							guard: 'Has todos',
							target: 'Todos Loaded',
						},
						{
							target: 'Creating new todo',
						},
					],
					onError: [
						{
							actions: 'assignErrorToContext',
							target: 'Loading todos errored',
						},
					],
				},
			},
			'Todos Loaded': {
				on: {
					'Create new': {
						target: 'Creating new todo',
					},
					Delete: {
						target: 'Deleting todo',
					},
				},
			},
			'Loading todos errored': {},
			'Creating new todo': {
				initial: 'Showing form input',
				states: {
					'Showing form input': {
						on: {
							'Form input changed': {
								actions: 'assignFormInputToContext',
							},
							Submit: {
								target: 'Saving todo',
							},
						},
					},
					'Saving todo': {
						invoke: {
							src: 'saveTodo',
							onDone: [
								{
									target: '#Todo machine.Loading Todos',
								},
							],
							onError: [
								{
									actions: 'assignErrorToContext',
									target: 'Showing form input',
								},
							],
						},
					},
				},
			},
			'Deleting todo': {
				invoke: {
					src: 'deleteTodo',
					onDone: [
						{
							target: 'Loading Todos',
						},
					],
					onError: [
						{
							actions: 'assignErrorToContext',
							target: 'Deleting todo errored',
						},
					],
				},
			},
			'Deleting todo errored': {
				after: {
					2500: {
						target: 'Todos Loaded',
					},
				},
				on: {
					'Speed up': {
						target: 'Todos Loaded',
					},
				},
			},
		},
	},
	{
		guards: {
			'Has todos': (context, event) => {
				return event.data.length > 0;
			},
		},
		actions: {
			assignTodosToContext: assign((context, event) => {
				return {
					todos: event.data,
				};
			}),
			assignErrorToContext: assign((context, event) => {
				return {
					errorMessage: event.data.message,
				};
			}),
			assignFormInputToContext: assign((context, event) => {
				return {
					createNewTodoFormInput: event.value,
				};
			}),
		},
	}
);
