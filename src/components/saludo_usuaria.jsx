import {memoriaLeerCon, memoriaLectorPara} from '../rte/es';
import {Saludo} from './saludo';

const memoriaLeerUsuaria= memoriaLectorPara(["usuaria{se_llama"]); //U: debe estar fuera del componente!

export function SaludoUsuaria() {
	const [nombre_en_memoria]= memoriaLeerCon( memoriaLeerUsuaria );
	const mensaje=`Hola, ${nombre_en_memoria}!`

	return <Saludo mensaje={mensaje}/>
}
