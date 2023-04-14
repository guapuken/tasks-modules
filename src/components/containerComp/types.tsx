import { Modo, css, onClickType } from '../../types';
// interface principal
export interface container {
	children?: any;
	AsideContent?: any;
	FooterContent?: any;
	header?: header;
	onClick?: onClicks;
	style?: css;
	headerStyle?: css;
	contentStyle?: css;
	footerStyle?: css;
	modo?: Modo;
}
type header = {
	moduleName?: string;
	legendBtnModule?: string;
	onClickBtnModule?: onClickType;
};
interface onClicks {
	createTask?: onClickType;
	createTemplate?: onClickType;
	createTeam?: onClickType;
	createProject?: onClickType;
	inicio?: onClickType;
	mannageTask?: onClickType;
	mannageTemplates?: onClickType;
	mannageTeams?: onClickType;
	mannageProjects?: onClickType;
	projectsStatus?: onClickType;
}
