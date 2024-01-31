import { useState } from 'react';
import { memoriaPoner, useEstadoYCambio } from '../rte/es';

import {Button} from 'primereact/button';
import {InputText} from 'primereact/inputtext';
import {InputSlider} from './input_slider';

export function MiForm() {
	const [nombre, setNombre, cuandoCambiaNombre]= useEstadoYCambio('')
	const [edad, setEdad]= useEstadoYCambio('')

	const cuandoPresionaOk= () => memoriaPoner({"usuaria{se_llama": nombre, "usuaria{edad": edad });

	return (<div>
		<h3>Este es un form</h3>
		<div><InputText placeholder="Nombre" value={nombre} onChange={cuandoCambiaNombre} /></div>
		<div><InputSlider placeholder="Edad" value={edad} setValue={setEdad} className="w-full" /></div>
		<div><Button label="Ok" onClick={cuandoPresionaOk} /></div>
	</div>)
}
