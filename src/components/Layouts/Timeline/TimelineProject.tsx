import React from 'react';
// elementos auxiliares
import { SimpleContainer, Title } from '../../Atoms';
import { Dropdown, Timeline } from '../../../components';
import { ButtonItem } from '../../../utils/asideUtils';
import VisualizacionMedios from './componentesPrincipales/VisualizacionMedios';
// types
import { timelineProjectProps } from './types/Types';
import { onChangeType } from '../../../types';
// archivos multimedia
import close from '../../../img/close.svg';
import logo from '../../../img/ByImjSimple.svg';
import share from '../../../img/share.svg';
//styles
import './styles/TimelineProject.scss';

const TimelineProject = ({
	fijos,
	vallas,
	indoors,
	urbanos,
	modo,
	onCh_dropdown,
	opcionesDropdown,
	valorInicialDropdown,
	tasks,
	nombreProyecto,
	onCl_compartir,
}: timelineProjectProps) => {
	return (
		<SimpleContainer className="timelineProject">
			<SimpleContainer className="timelineProject__header">
				<img
					className="timelineProject__header-logo"
					src={logo}
					alt="OBP By IMJ"
					onClick={onCl_compartir}
				/>
				<ButtonItem id="1" img={close} />
			</SimpleContainer>
			<Title modo="Light" className="timelineProject__infoProject">
				{nombreProyecto}
			</Title>
			<SimpleContainer className="timelineProject__contenido">
				<SimpleContainer className="timelineProject__contenido-timeline">
					<SimpleContainer style={{ width: '30vw', display: 'flex', gap: '10px' }}>
						<Dropdown
							modo={modo}
							onCh={onCh_dropdown as onChangeType}
							options={opcionesDropdown ?? []}
							placeHolder="Selecciona los medios"
							initialValue={valorInicialDropdown}
							style={{ marginBottom: '10px', width: 'calc(100% - 60px)' }}
						/>
						<img src={share} alt="" style={{ height: '30px' }} />
					</SimpleContainer>
					<Timeline modo={modo} tasks={tasks as any} />
				</SimpleContainer>
				<SimpleContainer className="timelineProject__contenido-medios">
					<VisualizacionMedios arreglo={fijos} modo={modo} titulo={'Sitios fijos'} />
					<VisualizacionMedios arreglo={urbanos} modo={modo} titulo={'Urbanos'} />
					<VisualizacionMedios arreglo={indoors} modo={modo} titulo={'Indoors'} />
					<VisualizacionMedios arreglo={vallas} modo={modo} titulo={'Vallas móviles'} />
				</SimpleContainer>
			</SimpleContainer>
		</SimpleContainer>
	);
};

export default TimelineProject;
