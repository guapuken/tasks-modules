import React from 'react';

const CloseIcon = () => {
	const [isHover, setIsHover] = React.useState(false);
	const ChangeOverState = () => {
		setIsHover(!isHover);
	};
	React.useEffect(() => {}, [isHover]);
	return (
		<svg
			onMouseEnter={ChangeOverState}
			onMouseLeave={ChangeOverState}
			height={'40'}
			width={'40'}
			viewBox="0 0 20 20"
			x={0}
			y={0}
			fill="red"
			style={{
				transform: isHover ? 'rotate(90deg)' : '',
				transition: '.3s ease',
			}}
		>
			<path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
		</svg>
	);
};

export default CloseIcon;
