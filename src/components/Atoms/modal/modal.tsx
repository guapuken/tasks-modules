import React from 'react';
// interface
import { modalProps } from './types/types';
// componentes principales
import { ErrorNC, FooterStr, HeaderStr, ContentStr } from './files';
// estilos
import './styles/modal.scss';

// construcción del componente principal
const Modal = (props: modalProps) => {
	const { header, Content, Footer, modo = 'Light', style, themeStyle } = props;
	return (
		<div className={`modal`} style={style} theme-config={modo} theme-style={themeStyle}>
			{header && <HeaderStr {...props} />}
			{Content ? <ContentStr {...props} /> : <ErrorNC />}
			{Footer && <FooterStr {...props} />}
		</div>
	);
};

export default Modal;
