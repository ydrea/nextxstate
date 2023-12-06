import { createMachine } from 'xstate';

export const hoverMachine = createMachine({
	initial: 'hoverNO',
	//prettier-ignore
	states: {
        hoverNO:
            { on: { MOUSEOVER: { target: 'hoverYES' } } },
        hoverYES: 
            { on: { MOUSEOUT: { target: 'hoverNO' } } },
    },
});
