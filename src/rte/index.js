//INFO: facade para nuestro runtime environment

//S:************************************************************
export * from './lib/util';
export { selectAt, useSelectorsAt, action, action_f, actionSet } from './_impl/redux/util';
export { navigationPush } from './_impl/redux/navigation';
export { t } from './_impl/redux/i18n';

import  { useState, useEffect } from 'react';
export const useStateAndChange= (v) => {
	const [q, set]= useState(v);
	const onChange= (e) => set(e.value || e.target?.value)
	return [q, set, onChange];
}
export const useStateWithUpdate= (v) => { //U: useState no se actualiza cuando cambian props
	const [q, set]= useState(v);
	useEffect(() => set(v), [v]);
	return [q,set];
}

//S:************************************************************
export { default as RteCtxt } from './_impl/components/RteCtxt.jsx';

//S:************************************************************
/*XXX:SAGA 
export { put as rteSend, call as rteCall } from 'redux-saga/effects';
export { rteSet, rteGet } from './_impl/redux/util';

export { takeEvery, all, delay } from 'redux-saga/effects';
export { rteRunSaga } from './_impl/redux/store.js';
*/
export * from './_impl/redux/import_dynamic';


