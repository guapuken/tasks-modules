import React from 'react';
// elementos auxiliares --------------------------------------------------------------------
//componentes
import { CardContainer } from '../../../../utils/cardsUtils';
// funciones
import { Hover } from '../../../../utils/hover';
import { SimpleContainer, Texts, Title, ValidationComponent } from '../../../Atoms';

//Componente que regresa el contenido de la card
const Content = ({ modo, teamName = 'Equipo', onCl_preview, members, teamColor }: any) => {
	const [mouseEnter, setMouseEnter] = React.useState(false);
	return (
		<CardContainer
			labels={{
				className: 'cardTeams',
				'theme-config': modo,
			}}
		>
			<SimpleContainer className={'cardTeams__contenedor'}>
				<SimpleContainer
					labels={{
						className: 'cardTeams__contenedor-title',
						onMouseEnter: Hover(setMouseEnter).enter,
						onMouseLeave: Hover(setMouseEnter).exit,
					}}
				>
					<Title modo={modo}>{teamName}</Title>
					<Texts
						modo={modo}
						onClick={() => {
							setMouseEnter(!mouseEnter);
							onCl_preview;
						}}
					>{`${members?.length ?? 0} Integrantes...`}</Texts>
					<ValidationComponent validate={members && members.length > 0 && mouseEnter}>
						<span className={'cardTeams__contenedor-title-members'}>
							{members?.map((e: any) => {
								return (
									<span
										key={e.id}
										id={e.name}
										className="cardTeams__contenedor-title-members-name"
									>
										{e.name}
									</span>
								);
							})}
						</span>
					</ValidationComponent>
				</SimpleContainer>
			</SimpleContainer>
			<SimpleContainer
				labels={{
					className: 'cardTeams__colorTeam',
					style: { background: teamColor },
				}}
				children={null}
			/>
		</CardContainer>
	);
};
export default Content;
