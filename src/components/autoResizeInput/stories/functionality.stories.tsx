import React from 'react';
import AutoresizeInput from '../autoresizeInput';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [nameTask, setNameTask] = React.useState('Dummies GDL');
	return (
		<AutoresizeInput
			id=""
			onCh={(e) => setNameTask(e.target.value)}
			initialValue={nameTask}
			modo="Light"
			placeholder="Hola que hace"
		/>
	);
}
storiesOf('Pruebas funcionalidad/autoresize Input', module).add('setData', () => <DemoComponent />);
