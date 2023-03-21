import React from 'react';
import { ButtonItem, ButtonsArray } from '../../utils/asideUtils';
import { CardContainer, returnSize, SimpleButtonText, Spans } from '../../utils/cardsUtils';
import { percent } from '../../utils/percent';
import { onClickType } from '../../utils/types/typesUtils';
import { windowSize } from '../../utils/widthSize';
import Cards from '../cards';
import Notifications from '../notifications';
import ProgressBar from '../progressBar';
import './cardProject.scss';
type statusTypes = 'onTime' | 'delayed' | 'outOfTime';
export interface CardProjectProps {
	progress?: number;
	status?: statusTypes;
	onClickFollowProject?: onClickType;
	onClickShowDetails?: onClickType;
	onClickShare?: onClickType;
	// tasks?: {}[];
	incompletedTask?: number;
	completedTask?: number;
	ejecutivo?: string;
	projectName?: string;
	followNotificationsValue?: boolean;
}
const CardProject = (props: CardProjectProps) => {
	const {
		status,
		followNotificationsValue,
		onClickShowDetails = () =>
			alert('Change the function ShowDetails with onClickShowDetails property'),
		onClickShare = () => alert('Change the function share with onClickShare property'),
		completedTask = 0,
		incompletedTask = 0,
		ejecutivo = 'Nombre del ejecutivo',
		projectName = 'Nombre de proyecto',
	} = props;
	const heightCard = 15.5;

	console.log('Tasks', incompletedTask + completedTask);
	//Content card
	const ContentCard = () => {
		return (
			<CardContainer>
				<div
					className="ContainerTitleAndiconsCardProject"
					style={{ justifyContent: 'space-between' }}
				>
					<h4 className="TextOverflow" style={{ WebkitLineClamp: 2 }} title={projectName}>
						{projectName}
					</h4>
					<ButtonsArray size={heightCard}>
						<ButtonItem img={require('../../img/share.svg')} onClick={onClickShare} />
						<ButtonItem>
							<Notifications checkValue={followNotificationsValue} />
						</ButtonItem>
					</ButtonsArray>
				</div>

				<SimpleButtonText style={{ fontSize: '1.4rem' }}>
					<Spans boldLegend="Ejecutivo: " legend={ejecutivo} positionBold="start" />
				</SimpleButtonText>
				<SimpleButtonText style={{ position: 'absolute', bottom: '0', fontSize: '1.3rem' }}>
					{windowSize().width > 1750 && (
						<Spans
							boldLegend={completedTask}
							legend="tareas terminadas"
							positionBold="start"
						/>
					)}
					<Spans
						boldLegend={incompletedTask}
						legend="tareas pendientes"
						positionBold="start"
						styleBold={{ marginLeft: '1rem' }}
					/>
				</SimpleButtonText>
				<div className="ContainerProgressBarAndShowDetails">
					<ProgressBar
						status={status}
						valor={
							completedTask === 0 || incompletedTask === 0
								? 0
								: percent(completedTask + incompletedTask, completedTask)
						}
						width={returnSize() + 3}
						onClick={onClickShowDetails}
						styleContent={{ cursor: 'pointer' }}
					/>
					<SimpleButtonText
						legend="mostrar detalles..."
						onClick={onClickShowDetails}
						style={{ fontSize: '1.4rem' }}
					/>
				</div>
			</CardContainer>
		);
	};

	//Definición de los argumentos
	const properties = {
		rounded: true,
		width: returnSize() + 5,
		height: heightCard,
		Content: ContentCard,
	};
	return <Cards {...properties} />;
};

export default CardProject;