import React from 'react';
// types
import { importantTextProps } from './types/types';
// styles
import './styles/importantText.scss';

const ImportantText = ({ children, modo, weight = 700 }: importantTextProps) => {
	return (
		<h2 className="importantText" theme-config={modo} style={{ fontWeight: weight }}>
			{children}
		</h2>
	);
};

export default ImportantText;
