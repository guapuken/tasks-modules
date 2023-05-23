import { Modo, onChangeType, onClickType, optionsDropdown, tasksTemplates } from '../../../types';
//INTERFACES
export interface modalTemplates {
	onCl_confirm: onClickType;
	onCl_abort: onClickType;
	onCl_addTask: onClickType;
	onCh_templateName: onChangeType;
	onCl_close: onClickType;

	onCh_dropDownTipoMedio: onChangeType;
	optionsTipoMedio?: optionsDropdown[];
	valueTipoMedio?: optionsDropdown;
	onCh_checkboxCampaign: onChangeType;
	onCh_checkboxMedio: onChangeType;

	edit?: boolean;
	templateNameValue?: string;
	idTemplate: string;
	tasks?: tasksTemplates[];
	modo: Modo;
	isMannager?: boolean;
}