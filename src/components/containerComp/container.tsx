import React from 'react';

//componentes auxiliares
import Button from '../button';
// componentes principales
import { Menu } from './files';
// importación de estilos
import css from './container.module.scss';
// types
import { container } from './types';

// types que se usan en documentación NO BORRAR
import { Modo } from '../../types';
import { header, onClicks } from './types';

/** documentación de componente
 * @param {any} props.children - recibe un children dentro del componente o cualquier elemento
 * @param {any} props.AsideContent - recibe componente o cualquier elemento
 * @param {any} props.FooterContent - recibe componentes o cualquier elemento
 * @param {header} props.header - recibe un objecto con 3 propiedades que son:
		legend
		legendBtn
		onCl_btn
 * @param {onClicks} props.onCl_menus - recibe un obejeto de funciones que son:
		createTask
		createTemplate
		createTeam
		createProject
		inicio
		mannageTask
		mannageTemplates
		mannageTeams
		mannageProjects
		projectsStatus	
* @param {React.CSSProperties} props.style - recibe un objeto con estilos de css
* @param {React.CSSProperties} props.headerStyle - recibe un objeto con estilos de css
* @param {React.CSSProperties} props.contentStyle - recibe un objeto con estilos de css
* @param {React.CSSProperties} props.footerStyle - recibe un objeto con estilos de css
* @param {Modo} props.modo - recibe la propiedad de selección de temas disponible
 * @returns - contenedor que incluye el aside, menu, un contenido y un footer
 */
const Container = (props: container) => {
	// desestructuración de propiedades
	const datos = { ...props };
	return (
		<div className={`ctn${datos.modo}_CtnC`} style={datos.style}>
			<div className={'menu'} style={{ zIndex: 1 }}>
				<Menu modo={datos.modo} onClick={datos.onCl_menus} />
			</div>
			{datos.AsideContent && <div className={'asideCtn'}>{datos.AsideContent}</div>}
			<div
				className={`ctnChild${datos.AsideContent ? 'Asd' : ''}${
					datos.FooterContent ? 'Ftr' : ''
				}`}
			>
				{datos.header && (
					<div className={'header'} style={datos.headerStyle}>
						<h2 style={{ marginRight: '10px' }}>{datos.header.legend}</h2>
						{datos.header.legendBtn && datos.header.onCl_btn && (
							<Button
								legend={datos.header.legendBtn}
								primary
								onCl={datos.header.onCl_btn}
							/>
						)}
					</div>
				)}
				<div className="children" style={datos.contentStyle}>
					{datos.children}
				</div>
				{datos.FooterContent && (
					<div style={datos.footerStyle} className={'footer'}>
						{datos.FooterContent}
					</div>
				)}
			</div>
		</div>
	);
};

export default Container;
