import React from 'react';
// utilidaes del storybook
import { Meta, Story } from '@storybook/react';
// componente principal
import Button from './button';
// types
import { button } from './types';
// storybook utils
import {
	boolean,
	color,
	filesNoBG,
	functions,
	modo,
	object,
	sizeBtns,
	text,
} from '../../storyUtils';

// creación de la plantilla en la que se colocará el componente
const Template: Story<button> = (args) => <Button {...args} />;

export const InitialState = Template.bind({});
InitialState.args = {
	onClick: () => alert('Change the function'),
};
export const Primary = Template.bind({});
Primary.args = {
	onClick: () => alert('Change the function'),
	primary: true,
	legend: 'Botón primario',
};
export const Secondary = Template.bind({});
Secondary.args = {
	onClick: () => alert('Change the function'),
	secondary: true,
	legend: 'Botón secundario',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
	onClick: () => alert('Change the function'),
	tertiary: true,
	legend: 'Botón terciario',
};

export default {
	//nombre de la carpeta en la que se agrupará y el título del elemento
	title: 'Átomos/button',
	component: Button,
	//Definición de argumentos
	argTypes: {
		onclick: functions(),
		size: sizeBtns(),

		style: object(),
		styleIcon: object(),

		legend: text(),
		color: color(),
		id: text(),
		key: text(),
		icon: filesNoBG(),
		colorHover: color(),
		className: text(),

		primary: boolean(),
		secondary: boolean(),
		tertiary: boolean(),
		rounded: boolean(),
		disabled: boolean(),
		border: boolean(),
		float: boolean(),
		modo: modo(),
	},
} as Meta;
