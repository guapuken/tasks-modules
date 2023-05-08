import { css, onBlurType, onChangeType } from '../../../types';

export interface inputLabel {
	type?: 'text' | 'number' | 'email' | 'password';
	legend?: string;
	initialValue?: string;
	min?: number;
	max?: number;
	onCh?: onBlurType;
	style?: css;
	id: string;
}
