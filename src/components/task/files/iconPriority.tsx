import React, { useState } from 'react';
import IconDropdown from '../../iconDropdown';
import FlagIcon from '../../../img/flagICon';

interface IconPriorityProps {
	prioridadInicial?: 'none' | 'baja' | 'media' | 'alta';
	onClickPrioridad?: (e: React.MouseEvent<HTMLElement>) => void;
	onClickNoPrioridad?: (e: React.MouseEvent<HTMLElement>) => void;
}

const IconPriority = (props: IconPriorityProps) => {
	//Desestructuración de propiedades
	const { prioridadInicial, onClickPrioridad, onClickNoPrioridad } = props;

	//Variables para definir el nivel de prioridad
	const [prioridad, setPrioridad] = useState(prioridadInicial || 'none');

	//Se agrega el estado de la prioridad y se da la opción de agregar un onClick en la para definir la función que se realizará al dar clic en el elemento
	const handleClickPriority = (prioridad: any) => {
		setPrioridad(prioridad.target.id);
		onClickPrioridad;
	};
	//Opciones de prioridades
	const optionsPriority = [
		{
			id: 'none',
			title: 'Sin prioridad',
			onClick: () => {
				setPrioridad('none');
				onClickNoPrioridad;
			},
		},
		{
			id: 'baja',
			title: 'Prioridad baja',
			onClick: handleClickPriority,
		},
		{
			id: 'media',
			title: 'Prioridad media',
			onClick: handleClickPriority,
		},
		{
			id: 'alta',
			title: 'Prioridad alta',
			onClick: handleClickPriority,
		},
	];

	return (
		<div style={{ width: 'auto', display: 'flex' }} className="ContainerIconPriority">
			{/* Se coloca el color de la bandera dependiendo del estado de la prioridad */}
			<IconDropdown
				title={`Prioridad ${prioridad === 'none' ? 'no definida' : prioridad}`}
				options={optionsPriority}
				svg={
					<FlagIcon
						fill={
							prioridad === 'baja'
								? '#1cbf59'
								: prioridad === 'media'
								? '#fcb23b'
								: prioridad === 'alta'
								? '#fc3d38'
								: '#525252'
						}
					/>
				}
			/>

			{/* Si existe el campo de prioridad se ejecuta el campo en el que se le agrega el color de la prioridad según se haya asignado */}
			{/* {prioridad &&
				useWindowSize().width > 1280 &&
				(prioridad === 'none' ? (
					<></>
				) : (
					<p
						className="TextPriorityMenu"
						style={{
							color: priorityColor(prioridad),
							transition: 'all ease 0.5s',
							fontSize: '1.4rem',
						}}
					>{`Prioridad ${prioridad}`}</p>
				))} */}
		</div>
	);
};
export default IconPriority;