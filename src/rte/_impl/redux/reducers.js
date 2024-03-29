//INFO: global app state

import { createReducer } from '@reduxjs/toolkit'
import { logmsg, set_p, nop } from '../../lib/util'

const initialState= {};

//VER: https://redux-toolkit.js.org/api/createReducer
//VER: https://redux-toolkit.js.org/api/createReducer#usage-with-the-map-object-notation

//S: GENERIC REDUCERS **************************************************
const setReducer= (state, action) => {
	//DBG: console.log("ACTION", action);
	if (action.type.startsWith("SET")) { //A: como prefijo, para poder usarla tambien de evento en listenerMiddleware
		const p2v= action.args.p2v;
		const pfx= action.args.pfx || '';

		Object.entries(p2v).forEach( ([k,v]) => {
			state= set_p(state, '{'+pfx+k, v)
			//DBG: console.log("SET E",k,v);
		} );
		return state;
	}
}

const defaultCaseReducer= setReducer;

//VER: https://redux-toolkit.js.org/api/createSlice
export const reducer= createReducer( initialState, (builder) => {
	builder.addDefaultCase(defaultCaseReducer) //A: use listenerMiddleware
})

export default reducer


