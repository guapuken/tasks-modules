import React, { useState } from 'react';
import './notifications.scss';
import { Modo } from '../../types';

export interface NotificationsProps {
	checkValue: boolean;
	onChange: (e: React.FormEvent<HTMLInputElement>) => void;
	idNotification: string;
	modo: Modo;
}

const Notifications = (props: NotificationsProps) => {
	const { checkValue = false, onChange, idNotification = '1', modo } = props;
	const [check, setCheck] = useState(checkValue);

	return (
		<>
			<div className={`ctn${modo === 'Dark' ? 'Dark' : ''}_SNC`}>
				<input
					id={idNotification}
					type="checkbox"
					className="inputSwitch"
					checked={check}
					onClick={() => setCheck(!check)}
					onChange={onChange}
				/>
				<label htmlFor={idNotification} className="lblSwitch">
					{
						<svg
							id="Capa_1"
							data-name="Capa 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 50 50"
						>
							<defs></defs>
							{/* Rellenos traseros */}
							<path
								fill="#282828"
								d="M27.17,42.71H22.31c-.45,0-.5.07-.6.59a3.61,3.61,0,0,0-.05,1.46A2.81,2.81,0,0,0,24,46.92a4.41,4.41,0,0,0,.79.08,3,3,0,0,0,2.3-1,2.57,2.57,0,0,0,.48-3,.37.37,0,0,0-.41-.24Z"
							/>
							<path
								fill="#282828"
								d="M25.19,10.33a7.25,7.25,0,0,0-1.52.15c-4.25.84-8.05,5.14-8.48,9.64-.19,2-.28,4-.46,6a5.33,5.33,0,0,1-.37,1.83c-.75,1.58-1.58,3.13-2.4,4.68a12.07,12.07,0,0,0-1.55,4,2.43,2.43,0,0,0,1.77,2.89c1.15.34,2.28.7,3.43,1a34.82,34.82,0,0,0,9.29,1.39h1.88a45.74,45.74,0,0,0,11.5-2.46A2.2,2.2,0,0,0,39.89,37a6.18,6.18,0,0,0-.47-2.11c-.92-1.93-2-3.79-2.94-5.69a7.16,7.16,0,0,1-.92-2.7c-.11-1.71-.27-3.42-.35-5.14a11.53,11.53,0,0,0-5-9.23,8.53,8.53,0,0,0-5.06-1.78Z"
							/>
							<path
								fill="#282828"
								d="M25.13,3H25a4.62,4.62,0,0,0-4.23,6.11c.16.46.36.72.77.72a2,2,0,0,0,.32,0,14.6,14.6,0,0,1,3.28-.37,15.55,15.55,0,0,1,3.31.37,2,2,0,0,0,.31,0c.39,0,.58-.23.73-.66A4.69,4.69,0,0,0,25.13,3Z"
							/>

							{/* rellenos delanteros */}
							<path
								fill={check ? '#fff' : '#282828'}
								d="M27,43.46a1.84,1.84,0,0,1-.43,2,2.27,2.27,0,0,1-1.75.78,2.91,2.91,0,0,1-.64-.07,2.06,2.06,0,0,1-1.77-1.59,2.88,2.88,0,0,1,.05-1.13H27"
							/>
							<path
								fill={check ? '#fff' : '#282828'}
								d="M28.56,8.8a16.65,16.65,0,0,0-3.42-.37,16.36,16.36,0,0,0-3.42.37h0a3.61,3.61,0,0,1,.48-3.29A3.54,3.54,0,0,1,25.06,4a3.8,3.8,0,0,1,3,1.51A3.62,3.62,0,0,1,28.56,8.8Z"
							/>
							<path
								fill={check ? '#fff' : '#282828'}
								d="M25.19,11.33h0a7.56,7.56,0,0,1,4.48,1.6,10.43,10.43,0,0,1,4.54,8.46c0,1.13.14,2.27.23,3.38,0,.59.09,1.19.13,1.78a7.9,7.9,0,0,0,1,3.08c.37.72.74,1.43,1.12,2.14.61,1.15,1.24,2.34,1.81,3.53a5.64,5.64,0,0,1,.38,1.77A1.22,1.22,0,0,1,38,38.43a45.15,45.15,0,0,1-11.24,2.41H24.9a33.85,33.85,0,0,1-9-1.36c-.87-.24-1.75-.5-2.6-.76l-.81-.25a1.43,1.43,0,0,1-1.07-1.79,10.39,10.39,0,0,1,1.33-3.42l.11-.21.44-.83c.67-1.27,1.36-2.57,2-3.9a6.5,6.5,0,0,0,.46-2.16c.08-.91.14-1.83.21-2.75s.14-2.14.25-3.2a10.34,10.34,0,0,1,7.67-8.76,6.73,6.73,0,0,1,1.33-.13"
							/>
						</svg>
					}
				</label>
			</div>
		</>
	);
};

export default Notifications;
