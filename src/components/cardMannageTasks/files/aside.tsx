import React from 'react';
import { AsideContainer, ButtonsArray } from '../../../utils/asideUtils';
import del from '../../../img/vaciar.svg';
import prev from '../../../img/previsualizar.svg';

export const Aside = ({ onClickDelete, onClickPreview, modo }: any) => (
	<AsideContainer>
		<ButtonsArray
			modo={modo}
			buttons={[
				{
					img: del,
					onClick: onClickDelete,
					titleToShow: 'Eliminar',
				},
				{
					img: prev,
					onClick: onClickPreview,
					titleToShow: 'Previsualizar',
				},
			]}
			vertical
		/>
	</AsideContainer>
);
