const initialData = {
	tasks: {
		'task-1': {
			id: 'task-1',
			content: 'Tarea 1',
		},
		'task-2': {
			id: 'task-2',
			content: 'Tarea 2',
		},
		'task-3': {
			id: 'task-3',
			content: 'Tarea 3',
		},
		'task-4': {
			id: 'task-4',
			content: 'Tarea 4',
		},
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: ' To do',
			taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
		},
		'column-2': {
			id: 'column-2',
			title: 'Progress',
			taskIds: [],
		},
	},
	// facilita reordenar las columnas
	columnOrder: ['column-1', 'column-2'],
};

export default initialData;
