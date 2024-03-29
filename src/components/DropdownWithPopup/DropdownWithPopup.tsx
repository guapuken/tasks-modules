import React, { useState } from 'react';
import { IconDropdown } from '../../components';
import { PopUp, ValidationComponent } from '../Atoms';
import { dropdownWithPopupProps } from './types/Types';
import './styles/styles.scss';

const DropdownWithPopup = ({
	style,
	className,
	modo,
	dropdownOptions,
	dropdownIcon,
	styleIcon,
	disabledDropdown,
	legend,
	validateToShowIcon,
	children,
	title,
}: dropdownWithPopupProps) => {
	//La variable isHover permite saber cuando el mouse se encuentra haciendo un hover en un elemento
	const [isHover, setIsHoverEnter] = useState(false);
	const Hover = () => {
		setIsHoverEnter(!isHover);
	};
	return (
		<div className={`dropdownWithPopup ${className}`} style={style}>
			<IconDropdown
				modo={modo}
				options={dropdownOptions}
				icon={dropdownIcon}
				iconStyles={styleIcon}
				disabled={disabledDropdown}
				title={title}
			/>
			<ValidationComponent validate={validateToShowIcon}>
				<div
					className={'dropdownWithPopup__circle'}
					onMouseEnter={Hover}
					onMouseLeave={Hover}
					onClick={() => setIsHoverEnter(!isHover)}
				>
					{legend}
					<PopUp className="TabletAndMobileVersion" isHover={isHover}>
						{children}
					</PopUp>
				</div>
			</ValidationComponent>
		</div>
	);
};

export default DropdownWithPopup;
