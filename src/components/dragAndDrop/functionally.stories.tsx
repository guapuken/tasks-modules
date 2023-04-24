import React from 'react';
import DragAndDrop from '.';
import { storiesOf } from '@storybook/react';
import CardTask from '../cardTask/cardTask';
import Container from '../containerComp/container';
import AsideTemplates from '../asideTemplates/asideTemplates';

// función para ver si funciona correctamente el onChange
function DemoComponent() {
	const [notifications, setNotifications] = React.useState(false);
	const [dragEnd, setDragEnd] = React.useState({});
	// consoles para revisar que sse generen de manera correcta los setteos
	// console.clear();
	React.useEffect(() => {}, [notifications]);
	console.log('notifications: ', notifications);
	console.log('dragEnd: ', dragEnd);

	return (
		<Container AsideContent={<AsideTemplates />}>
			<DragAndDrop
				Card={CardTask}
				// onDragEnd={(e) => setDragEnd(e)}
				onDragEnd={(e) => console.log(e)}
				tasks={[
					{
						id: '1',
						idNotification: '1',
						status: 'To Do',
						taskName: 'darle un sape a Adan',
						taskDescription: 'no pues creo que no',
						statusTask: 'outOfTime',
						percentTask: 25,
						valueRevision: 'Jorge Correa',
						followNotificationsValue: notifications,
						onCl_follow: () => {
							setNotifications(!notifications);
						},
						onCl_edit: () => alert('editar'),
						onCh_follow: () => alert('editar'),
					},
					{
						id: '2',
						idNotification: '2',
						onCl_edit: () => alert('editar'),
						onCl_showDetails: () => alert('editar'),
						status: 'Progress',
						taskName: 'decirle gracias a Adan',
						taskDescription: 'no pues creo que no',
						statusTask: 'outOfTime',
						percentTask: 25,
						onCl_follow: () => {
							console.log('entró en notificaciones');
							setNotifications(!notifications);
						},
						followNotificationsValue: notifications,

						onCh_follow: () => setNotifications(!notifications),
					},
					{
						id: '3',
						idNotification: '3',
						status: 'To Do',
						taskName: 'decirle gracias a Adan',
						taskDescription: 'no pues creo que no',
						statusTask: 'outOfTime',
						percentTask: 25,
						onCl_follow: () => {
							console.log('entró en notificaciones');
							setNotifications(!notifications);
						},
						followNotificationsValue: notifications,
						onCl_edit: () => alert('editar'),

						onCh_follow: () => setNotifications(!notifications),
					},
					{
						id: '4',
						idNotification: '4',
						status: 'To Do',
						taskName: 'decirle gracias a Adan',
						taskDescription: 'no pues creo que no',
						statusTask: 'outOfTime',
						percentTask: 25,
						onCl_follow: () => {
							console.log('entró en notificaciones');
							setNotifications(!notifications);
						},
						followNotificationsValue: notifications,
						onCl_edit: () => alert('editar'),

						onCh_follow: () => setNotifications(!notifications),
					},
					{
						id: '5',
						idNotification: '5',
						status: 'Done',
						taskName: 'decirle gracias a Adan',
						taskDescription: 'no pues creo que no',
						statusTask: 'outOfTime',
						percentTask: 25,
						onCl_follow: () => {
							console.log('entró en notificaciones');
							setNotifications(!notifications);
						},
						followNotificationsValue: notifications,
						onCl_edit: () => alert('editar'),

						onCh_follow: () => setNotifications(!notifications),
					},
				]}
				nameBoards={{
					'To Do': 'To Do',
					Progress: 'Progress',
					Done: 'Done',
				}}
			/>
		</Container>
	);
}
storiesOf('Pruebas funcionalidad/drag and drop', module).add('setData', () => <DemoComponent />);