import { Avatar } from 'primereact/avatar';

export function Saludo({mensaje}) {
	return (<div className="m-4">
		<Avatar icon="pi pi-user" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
		{mensaje}
	</div>)
}

