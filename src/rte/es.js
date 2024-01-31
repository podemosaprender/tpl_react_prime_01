//INFO: facade para nuestro runtime environment EN ESPAÑOL, para enseñar!

//S:************************************************************
export * from './lib/util';
export { useSelector as memoriaLeerCon } from 'react-redux';
export { 
	selectAt as memoriaLectorPara,
	action as accion, 
	action_f as accion_f, 
	actionSet as memoriaPoner 
} from './_impl/redux/util';
export { 
	navigationPush as navegarA
} from './_impl/redux/navigation';
export { t } from './_impl/redux/i18n';

import { useState, useEffect } from 'react';
export const useStateWithUpdate= (v) => { //U: useState no se actualiza cuando cambian props
	const [q, set]= useState(v);
	useEffect(() => set(v), [v]);
	return [q,set];
}

import { useStateAndChange } from './index'
export const useEstadoYCambio= useStateAndChange;

