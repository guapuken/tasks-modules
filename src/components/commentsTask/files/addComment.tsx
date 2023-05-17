import React from 'react';

import { AutoresizeInput, Button } from '../../../components';
import { commentTask } from '../types';
import { Texts } from '../../Atoms';

const CommentTask = (props: commentTask) => {
	const { onCl_addComment, onCh_addFile, idComment, onCh_comment, modo } = props;

	return (
		<div className="ctnBlockComents_TWCC" style={{ padding: '10px' }}>
			<fieldset>
				<AutoresizeInput
					modo={modo}
					id={idComment as string}
					placeholder="Agregar comentario"
					taskType="task"
					onCh={onCh_comment}
				/>
			</fieldset>
			<div className="ctnButtons">
				<input
					type="file"
					id="file"
					onChange={(e) => {
						if (onCh_addFile) {
							onCh_addFile(e);
						}
					}}
				/>
				<label htmlFor="file" style={{ userSelect: 'none', cursor: 'pointer' }}>
					<Texts modo={modo}>Adjuntar</Texts>
				</label>
				<Button
					modo={modo}
					primary
					legend="Comentar"
					onCl={onCl_addComment}
					style={{ height: '20px' }}
				/>
			</div>
		</div>
	);
};
export default CommentTask;
