import React from 'react';
// ---------------------------------------------------------------------------------------------------------
//      eementos auxiliares
// ---------------------------------------------------------------------------------------------------------
// componentes
import { CardContainer, Spans } from '../../../utils/cardsUtils';
import { ButtonItem } from '../../../utils/asideUtils';
import { Notifications, ProgressBar } from '../../../components';
// funciones
import { useWindowSize } from '../../../utils/windowSize';
import { percent } from '../../../utils/percent';
import { cardW } from '../../../utils/functions/functions';
//archivos multimedia
import shareIcon from '../../../img/share.svg';
// estilos
import '../cardProject.scss';
import { cardProject } from '../types';
import { TextButton, Title } from '../../Atoms';

// ---------------------------------------------------------------------------------------------------------
//      creación de componente
// ---------------------------------------------------------------------------------------------------------
const Content = ({
	modo,
	projectName = 'Projecto',
	follow,
	onCl_share,
	ejecutivo = 'Ejecutivo',
	statusTasks,
	completedTask = 0,
	incompletedTask = 10,
	onCl_showDetails,
	onCh_follow,
	idProject,
}: cardProject) => {
	return (
		<CardContainer className="ctn_CProjectC">
			<div className="title">
				<Title modo={modo} className="ttlProject">
					{projectName}
				</Title>
			</div>
			<div className="ctnBtns">
				<ButtonItem
					id={idProject as string}
					img={shareIcon}
					onClick={onCl_share}
					style={{ marginBottom: '10px' }}
				/>
				<Notifications
					modo={modo}
					idNotification={idProject}
					onChange={onCh_follow}
					checkValue={follow}
				/>
			</div>
			<div className="ctnEjecutivoBtns">
				<Spans boldLegend="Ejecutivo: " legend={ejecutivo} positionBold="start" />
			</div>

			<div className=".ctnProgressBar_showDtls">
				<ProgressBar
					modo={modo}
					status={statusTasks}
					valor={
						completedTask === 0 || incompletedTask === 0
							? 0
							: percent(completedTask + incompletedTask, completedTask)
					}
					width={cardW(false) - 3}
					onClick={onCl_showDetails}
					styleContent={{ cursor: 'pointer' }}
				/>
				<div className="ftr">
					<TextButton modo={modo} onClick={onCl_showDetails}>
						Mostrar detalles...
					</TextButton>
				</div>
			</div>
		</CardContainer>
	);
};

export default Content;
