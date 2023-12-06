import { createMachine } from 'xstate';

export const hoverMachine = createMachine({
	initial: 'hoverNOT',
	//prettier-ignore
	states: {
        hoverNOT:
            { on: { MOUSEOVER: { target: 'hoverYES' } } },
        hoverYES: 
            { on: { MOUSEOUT: { target: 'hoverNOT' } } },
    },
});
