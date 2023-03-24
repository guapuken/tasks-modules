import React from 'react';
import Buttons from '../buttons';
import IconDropdown from '../iconDropdown';
import InputLabel from '../inputLabel';
import Modal from '../modal';
import Task from '../task';
import { AddTask } from '../task/complements/addTask';
import { optionsPlantillas } from '../task/task';
import '../../styles.scss';

//TYPES
interface submenus {
	id?: number | string;
	className?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	title?: string;
}
interface optionsType {
	id?: string;
	submenus?: submenus[];
	title?: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	className?: string;
}
interface childrenTypes {
	idTask: String;
	equipos: optionsType[];
	Children: any;
	onChangeDescriptionTask: (e: React.FormEvent<HTMLInputElement>) => void;
	onChangeNameTask: (e: React.FormEvent<HTMLInputElement>) => void;
	onClickAddTask: (e: React.MouseEvent<HTMLElement>) => void;
	onClickCreateTemplate: (e: React.MouseEvent<HTMLElement>) => void;
	revision: optionsType[];
	valueRevision: string;
	responsables: optionsType[];
	taskDisabled: boolean;
	valueTask: string;
	valueDescription: string;
	valueResponsable: string;
	subtaskForbbiden: boolean;
	templateOptions: optionsType[];
	onClickDeleteTask: (e: React.MouseEvent<HTMLElement>) => void;
	className: string;
	durationValue: string;
}

//INTERFACES
export interface ModalProjectsProps {
	onClickCrear?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickCancelar?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickAddTask?: (e: React.MouseEvent<HTMLElement>) => void;
	onChangeTemplateName?: (e: React.FormEvent<HTMLInputElement>) => void;
	projectNameValue?: string;
	Children?: childrenTypes[];
	templateOptions?: optionsType[];
	onClickCreateTemplate?: (e: React.MouseEvent<HTMLElement>) => void;
}
const ModalProjects = (props: ModalProjectsProps) => {
	//DESESTRUCTURACIÓN DEL PROPIEDADES COMPONENTE PRINCIPAL
	const {
		onClickCrear,
		onClickCancelar,
		onClickAddTask,
		onChangeTemplateName = () => {},
		projectNameValue,
		Children,
		templateOptions = [],
		onClickCreateTemplate = () => {},
	} = props;

	//COMPONENTE QUE REGRESA LOS BOTONES DEL MODAL
	const Footer = () => (
		<div style={{ width: '90%', margin: '0 auto' }}>
			<Buttons
				buttons={{ primary: true, secondary: true }}
				legends={{ primary: 'Crear proyecto', secondary: 'Cancelar' }}
				onClick={{ primary: onClickCrear, secondary: onClickCancelar }}
			/>
		</div>
	);

	//COMPONENTE QUE REGRESA TODO EL CONTENIDO DEL MODAL
	const Content = () => (
		<div>
			<InputLabel
				legend="Nombre del proyecto"
				onChange={onChangeTemplateName}
				style={{ maxWidth: '98%' }}
				initialValue={projectNameValue}
			/>
			<AddTask legend="+ Añadir tarea" onClick={onClickAddTask} />
			<IconDropdown
				legend="Cargar plantilla"
				iconStyles={{
					marginLeft: '2rem',
					fontSize: '1.5rem',
				}}
				options={optionsPlantillas(templateOptions, onClickCreateTemplate)}
			/>
			<div style={{ borderLeft: '.2rem solid #282828', paddingLeft: '1rem' }}>
				{Children &&
					Children.map((e: any) => (
						<Task
							idCheckbox={e.idTask}
							equipos={e.equipos}
							Children={e.Children}
							principalTask
							onChangeDescriptionTask={e.onChangeDescription}
							onChangeNameTask={e.onChangeName}
							onClickAddTask={e.onClickAddTask}
							onClickCreateTemplate={e.onClickNewTemplate}
							revision={e.revision}
							valueRevision={e.valueRevision}
							responsables={e.responsables}
							taskDisabled={e.taskDisabled}
							valueTask={e.valueTask}
							valueDescription={e.valueDescription}
							valueResponsable={e.valueResponsable}
							subtaskForbbiden={e.subtaskForbbiden}
							templateOptions={e.templateOptions}
							moreOptions={[
								{
									title: 'Eliminar',
									onClick: e.onClickDeleteTask,
								},
							]}
							className={e.className}
							plantillas
							durationValue={e.durationValue}
						/>
					))}
			</div>
		</div>
	);

	//DESESTRUCTURACIÓN DE PROPIEDADES DEL COMPONENTE DE MODAL
	const args = {
		header: 'Creación de proyectos',
		Content: Content,
		Footer: Footer,
	};
	return <Modal {...args} />;
};

export default ModalProjects;
