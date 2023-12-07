import { createMachine } from 'xstate';

export const hoverMachine = createMachine({
	/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOmwHsA3MAJwDkB5AFQGIBZBgVQGUBRBgGq8ASgG0ADAF1EoAA7lYuAC65y+GSAAeicQBoQATx0BfY-rRY8hUhWo0Amr27sufLkwnSkIeYpVqNbQQAFgB2EgBGAE4YqIA2ACZg4KjxUOCAVn0jBGiokgAOcWKS9IzxDILTMxB8cgg4DQscAmINX2VVdW8ggFpgguzEXoLwhNiogriMiOSUhNNzDBbrMipaRiZ2hU6AnsQIgvy4ksOMgGZQ8WSkoYRJknOS8qjz+MPQuMWQZqtiNbsjm42z8XUCOju6RI41i4gSiXEUQiCSq1SAA */
	initial: 'hoverNOT',
	//prettier-ignore
	states: {   
        hoverNOT:
            { on: { MOUSEOVER: { target: 'hoverYES' } } },
        hoverYES: 
            { on: {  MOUSEOUT: { target: 'hoverNOT' } } },
    },
});
