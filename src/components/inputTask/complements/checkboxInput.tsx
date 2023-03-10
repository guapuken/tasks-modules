import React from 'react';
import { onChangeType, onClickType } from '../../../utils/types/typesUtils';

interface CheckboxInputProps {
	onClick?: onClickType;
	onChange?: onChangeType;

	principalTask?: boolean;
	disabled?: boolean;
	check?: boolean;

	idCheckbox?: string;
}
export const CheckboxInput = (props: CheckboxInputProps) => {
	const { principalTask, onClick, disabled, onChange, check, idCheckbox = '' } = props;

	return (
		<div style={{ marginTop: principalTask ? '1rem' : '.8rem' }}>
			<input
				type="checkbox"
				id={idCheckbox}
				onClick={onClick}
				checked={check}
				disabled={disabled}
				onChange={onChange}
			/>
			<label htmlFor={idCheckbox}></label>
		</div>
	);
};
