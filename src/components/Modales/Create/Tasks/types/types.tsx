import {
	Modo,
	onChangeType,
	onClickType,
	optionsIcnDrp,
	prioritys,
	submenusArray,
	subtasksProps,
} from '../../../../../types';

// interface principal
export interface tasksProps {
	idTask: string;
	check: boolean;
	valueTeam?: string;
	onCl_close: onClickType;
	onCh_checkbox: onChangeType;
	equipos: submenusArray[];
	subtasks?: subtasksProps[];
	onCheck: onChangeType;
	onCh_descriptionTask: onChangeType;
	onCh_nameTask: onChangeType;
	onCl_addTask: onClickType;
	onCl_newTemplate: onClickType;
	onCl_selectPriority: onClickType;
	onCl_delete: onClickType;
	onCl_reminder: onClickType;
	priorityValue?: prioritys;
	revision: submenusArray[];
	valueRevision?: string;
	responsables: submenusArray[];
	taskComplete?: boolean;
	taskDisabled?: boolean;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	endDateValue: string;
	startDateValue: string;
	maxEndDate?: string;
	maxStartDate?: string;
	minEndDate?: string;
	minStartDate?: string;
	valueTask: string;
	valueDescription: string;
	valueResponsable: string;
	subtaskForbbiden?: boolean;
	onCh_startDate: onChangeType;
	onCh_endDate: onChangeType;
	templateOptions: optionsIcnDrp[];
	moreOptions?: optionsIcnDrp[];
	className?: string;
	onCl_confirm: onClickType;
	onCl_abort: onClickType;
	edit?: boolean;
	modo: Modo;
	dependenciesOptions?: optionsIcnDrp[];
	dependence?: {
		id?: string;
		title?: string;
		onClick?: onClickType;
	} | null;
	valueDificultad?: {
		id?: string;
		title?: string;
	};
	onCh_dificultad?: onChangeType;
	isPM?: boolean;
	haveSubPersonal?: boolean;
}

export type content = {
	idTask: string;
	check: boolean;
	onCh_checkbox: onChangeType;
	equipos: submenusArray[];
	subtasks?: subtasksProps[];
	maxEndDate?: string;
	maxStartDate?: string;
	minEndDate?: string;
	minStartDate?: string;

	onCheck: onChangeType;
	onCh_descriptionTask: onChangeType;
	onCh_nameTask: onChangeType;
	onCl_addTask: onClickType;
	onCl_newTemplate: onClickType;
	onCl_selectPriority: onClickType;
	onCl_delete: onClickType;
	onCl_reminder: onClickType;
	priorityValue?: prioritys;
	revision: submenusArray[];
	valueRevision?: string;
	responsables: submenusArray[];
	taskComplete?: boolean;
	taskDisabled?: boolean;
	disabledEndDate?: boolean;
	disabledStartDate?: boolean;
	endDateValue: string;
	startDateValue: string;
	valueTask: string;
	valueDescription: string;
	valueResponsable: string;
	valueTeam?: string;
	subtaskForbbiden?: boolean;
	onCh_startDate: onChangeType;
	onCh_endDate: onChangeType;
	templateOptions: optionsIcnDrp[];
	moreOptions?: optionsIcnDrp[];
	className?: string;
	dependenciesOptions?: optionsIcnDrp[];
	dependence?: {
		id: string;
		title: string | undefined;
		onClick?: onClickType;
	} | null;
	valueDificultad?: {
		id: string;
		title: string;
	};
	onCh_dificultad?: onChangeType;
	isPM?: boolean;
	haveSubPersonal?: boolean;
};
export type footer = {
	onCl_confirm: onClickType;
	onCl_abort: onClickType;
	edit?: boolean;
	modo: Modo;
};
