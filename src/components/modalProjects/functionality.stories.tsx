import React from 'react';
import ModalProjects from '.';
import { storiesOf } from '@storybook/react';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [projectName, setProjectName] = React.useState('Uber Eats-2536-Espectaculares-Noviembre');
	const [nameTask, setNameTask] = React.useState('Dummies');
	const [descriptionTask, setDescriptionTask] = React.useState(
		'campaña Uber Eats-2536-Espectaculares-Noviembre'
	);
	const [priority, setPriority] = React.useState('none');
	const [checked, setCheckedd] = React.useState(false);
	const [startDate, setStartDate] = React.useState();
	const [endDate, setEndDate] = React.useState();
	const [responsable, setResponsable] = React.useState({ id: undefined, name: undefined });
	const [revision, setRevision] = React.useState({ id: undefined, name: undefined });

	// consoles para revisar que sse generen de manera correcta los setteos
	console.clear();
	console.log('nombre proyecto: ', projectName);
	console.log('nombre tarea: ', nameTask);
	console.log('descripción: ', descriptionTask);
	console.log('prioridad: ', priority);
	console.log('startDate: ', startDate);
	console.log('endDate: ', endDate);
	console.log('responsable: ', responsable);
	console.log('revision: ', revision);
	return (
		<ModalProjects
			modo="Light"
			onChangeName={(e: any) => {
				setProjectName(e.target.value);
			}}
			templateOptions={[
				{
					id: '1',
					title: 'Espectaculares',
					onClick: () => alert('Espectaculares'),
				},
			]}
			projectNameValue={projectName}
			// button clicks
			onClickAddTask={() => alert('Tarea nueva')}
			onClickCreateTemplate={() => alert('Crear plantilla')}
			onClickCreate={() => alert('Hola')}
			onClickAbort={() => alert('Adios')}
			// por probar
			subtasks={[
				{
					idTask: '25',
					valueTask: nameTask,
					valueDescription: descriptionTask,
					onClickDeleteTask: () => alert('borrar tarea'),
					onChangeNameTask: (e) => setNameTask(e.target.value),
					onChangeDescriptionTask: (e) => setDescriptionTask(e.target.value),
					onClickPrioridad: (e) => setPriority(e.target.id),
					prioridadInicial: priority,
					check: checked,
					onChangeCheckbox: (e) => setCheckedd(!checked),
					startDateValue: startDate,
					onChangeStartDate: (e) => setStartDate(e.target.value),
					endDateValue: endDate,
					onChangeEndDate: (e) => setEndDate(e.target.value),
					responsables: [
						{
							id: '1',
							title: 'Jorge Correa',
							// onClick: (e) => setResponsable(e.target.value),
							onClick: (e) =>
								setResponsable({ id: e.target.id, name: e.target.outerText }),
						},
						{
							id: '2',
							title: 'Kaori Soto',
							onClick: (e) => console.log(e),
						},
					],
					revision: [
						{
							id: '1',
							title: 'Jorge Correa',
							// onClick: (e) => setResponsable(e.target.value),
							onClick: (e) =>
								setRevision({ id: e.target.id, name: e.target.outerText }),
						},
						{
							id: '2',
							title: 'Kaori Soto',
							onClick: (e) => console.log(e),
						},
					],
					valueResponsable: responsable.name,
					valueRevision: revision.name,
					subtasks: [
						{
							idTask: '27',
							valueTask: nameTask,
							valueDescription: descriptionTask,
							onClickDeleteTask: () => alert('borrar tarea'),
							onChangeNameTask: (e) => setNameTask(e.target.value),
							onChangeDescriptionTask: (e) => setDescriptionTask(e.target.value),
							onClickPrioridad: (e) => setPriority(e.target.id),
							prioridadInicial: priority,
							check: checked,
							onChangeCheckbox: (e) => setCheckedd(!checked),
							startDateValue: startDate,
							onChangeStartDate: (e) => setStartDate(e.target.value),
							endDateValue: endDate,
							onChangeEndDate: (e) => setEndDate(e.target.value),
							responsables: [
								{
									id: '1',
									title: 'Jorge Correa',
									// onClick: (e) => setResponsable(e.target.value),
									onClick: (e) =>
										setResponsable({
											id: e.target.id,
											name: e.target.outerText,
										}),
								},
								{
									id: '2',
									title: 'Kaori Soto',
									onClick: (e) => console.log(e),
								},
							],
							revision: [
								{
									id: '1',
									title: 'Jorge Correa',
									// onClick: (e) => setResponsable(e.target.value),
									onClick: (e) =>
										setRevision({ id: e.target.id, name: e.target.outerText }),
								},
								{
									id: '2',
									title: 'Kaori Soto',
									onClick: (e) => console.log(e),
								},
							],
							valueResponsable: responsable.name,
							valueRevision: revision.name,
							subtasks: [
								{
									idTask: '27',
									valueTask: nameTask,
									valueDescription: descriptionTask,
									onClickDeleteTask: () => alert('borrar tarea'),
									onChangeNameTask: (e) => setNameTask(e.target.value),
									onChangeDescriptionTask: (e) =>
										setDescriptionTask(e.target.value),
									onClickPrioridad: (e) => setPriority(e.target.id),
									prioridadInicial: priority,
									check: checked,
									onChangeCheckbox: (e) => setCheckedd(!checked),
									startDateValue: startDate,
									onChangeStartDate: (e) => setStartDate(e.target.value),
									endDateValue: endDate,
									onChangeEndDate: (e) => setEndDate(e.target.value),
									responsables: [
										{
											id: '1',
											title: 'Jorge Correa',
											// onClick: (e) => setResponsable(e.target.value),
											onClick: (e) =>
												setResponsable({
													id: e.target.id,
													name: e.target.outerText,
												}),
										},
										{
											id: '2',
											title: 'Kaori Soto',
											onClick: (e) => console.log(e),
										},
									],
									revision: [
										{
											id: '1',
											title: 'Jorge Correa',
											// onClick: (e) => setResponsable(e.target.value),
											onClick: (e) =>
												setRevision({
													id: e.target.id,
													name: e.target.outerText,
												}),
										},
										{
											id: '2',
											title: 'Kaori Soto',
											onClick: (e) => console.log(e),
										},
									],
									valueResponsable: responsable.name,
									valueRevision: revision.name,
								},
								{
									idTask: '27',
									valueTask: nameTask,
									valueDescription: descriptionTask,
									onClickDeleteTask: () => alert('borrar tarea'),
									onChangeNameTask: (e) => setNameTask(e.target.value),
									onChangeDescriptionTask: (e) =>
										setDescriptionTask(e.target.value),
									onClickPrioridad: (e) => setPriority(e.target.id),
									prioridadInicial: priority,
									check: checked,
									onChangeCheckbox: (e) => setCheckedd(!checked),
									startDateValue: startDate,
									onChangeStartDate: (e) => setStartDate(e.target.value),
									endDateValue: endDate,
									onChangeEndDate: (e) => setEndDate(e.target.value),
									responsables: [
										{
											id: '1',
											title: 'Jorge Correa',
											// onClick: (e) => setResponsable(e.target.value),
											onClick: (e) =>
												setResponsable({
													id: e.target.id,
													name: e.target.outerText,
												}),
										},
										{
											id: '2',
											title: 'Kaori Soto',
											onClick: (e) => console.log(e),
										},
									],
									revision: [
										{
											id: '1',
											title: 'Jorge Correa',
											// onClick: (e) => setResponsable(e.target.value),
											onClick: (e) =>
												setRevision({
													id: e.target.id,
													name: e.target.outerText,
												}),
										},
										{
											id: '2',
											title: 'Kaori Soto',
											onClick: (e) => console.log(e),
										},
									],
									valueResponsable: responsable.name,
									valueRevision: revision.name,
								},
							],
						},
					],
				},
				// {
				// 	idTask: '26',
				// 	valueTask: 'Impresión',
				// 	valueDescription: 'Realizar dummies de la campaña de UBER',
				// 	prioridadInicial: 'alta',
				// },
			]}
		/>
	);
}
storiesOf('Pruebas funcionalidad/modal de proyectos', module).add('setData', () => (
	<DemoComponent />
));
