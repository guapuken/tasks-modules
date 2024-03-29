import React from 'react';
import { SimpleContainer, Title, ValidationComponent } from '../../Atoms';

import './Styles/Container.scss';
import { Button, Chat } from '../../../components';
import Menu from '../../containerComp/files/menu';
import { aspectRatio } from '../../../utils/functions/functions';

const Container = ({
	header,
	children,
	AsideContent,
	FooterContent,
	modo,
	chat,
	onCh_commentChat,
	onCh_dropdownChat,
	onCl_addCommentChat,
	projectName,
	chatValue,
	chats,
	messages,
	multiplesChats,
	themeStyle,
	onCl_menus,
}: any) => {
	return (
		<SimpleContainer
			className="contenedorLayout"
			labels={{
				'aside-status': AsideContent ? 'withAside' : 'noAside',
				'chat-status': chat ? 'withChat' : 'noChat',
				'theme-config': modo,
			}}
		>
			<SimpleContainer style={{ position: 'absolute' }}>
				<Menu modo={modo} onClick={onCl_menus} />
			</SimpleContainer>
			<ValidationComponent validate={AsideContent}>
				<SimpleContainer className="contenedorLayout__aside">
					{AsideContent}
				</SimpleContainer>
			</ValidationComponent>
			<SimpleContainer className="contenedorLayout__children">
				<ValidationComponent validate={header}>
					<SimpleContainer className="contenedorLayout__children-header">
						<Title modo={modo}>{header.legend}</Title>
						<ValidationComponent validate={header.legendBtn}>
							<Button
								modo={modo}
								onCl={header.onCl_btn}
								legend={header.legendBtn}
								primary
								size="small"
							/>
						</ValidationComponent>
					</SimpleContainer>
				</ValidationComponent>
				<SimpleContainer className="contenedorLayout__children-contenido">
					{children}
				</SimpleContainer>
				<ValidationComponent validate={FooterContent}>
					<SimpleContainer className="container__children-footer">
						{FooterContent}
					</SimpleContainer>
				</ValidationComponent>
			</SimpleContainer>
			<ValidationComponent validate={chat}>
				<SimpleContainer className="contenedorLayout__chat">
					<Chat
						themeStyle=""
						multiplesChats={multiplesChats}
						onCh_comment={onCh_commentChat}
						onCh_dropdown={onCh_dropdownChat}
						onCl_addComment={onCl_addCommentChat}
						projectName={projectName}
						modo={modo}
						chatValue={chatValue}
						chats={chats}
						messages={messages}
					/>
					{chat}
				</SimpleContainer>
			</ValidationComponent>
		</SimpleContainer>
	);
};
export default Container;
