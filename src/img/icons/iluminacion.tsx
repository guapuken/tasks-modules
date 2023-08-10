import React from 'react';
export const Iluminacion = ({ fill, withIlumination }: any) => {
	return withIlumination ? (
		<svg x="0px" y="0px" width={50} height={50}>
			<g>
				<path
					fill={fill}
					d="M25,12.9c5.2,0,9.4,4.2,9.4,9.5c0,2.9-1.3,5.6-3.7,7.4c-1.8,1.4-2.8,3.6-2.7,5.8v0.7h-6.1l0-0.9
			c0-2.3-1.1-4.4-2.9-5.7c-2.2-1.8-3.5-4.5-3.5-7.3c0.1-5.1,4-9.2,9.1-9.5C24.8,12.9,24.9,12.9,25,12.9L25,12.9 M25,10.9
			C25,10.9,25,10.9,25,10.9c-0.2,0-0.3,0-0.5,0c-6.1,0.3-10.9,5.3-11,11.5c0,3.5,1.6,6.7,4.3,8.9c1.3,1,2.1,2.6,2.1,4.2v2.8h10.1
			v-2.7c0-1.7,0.7-3.2,2-4.3c2.8-2.2,4.4-5.5,4.4-9C36.4,16.1,31.3,10.9,25,10.9L25,10.9z"
				/>
			</g>
			<path
				fill={fill}
				d="M21.1,40.1h7.8c0.6,0,1.1,0.5,1.1,1.1l0,0c0,0.6-0.5,1.1-1.1,1.1h-7.8c-0.6,0-1.1-0.5-1.1-1.1l0,0
				C20,40.6,20.5,40.1,21.1,40.1z"
			/>
			<path
				fill={fill}
				d="M21.1,44h7.8c0.6,0,1.1,0.5,1.1,1.1v0.4c0,0.6-0.5,1.1-1.1,1.1h-7.8c-0.6,0-1.1-0.5-1.1-1.1v-0.4
				C20,44.5,20.5,44,21.1,44z"
			/>
			<path
				fill={fill}
				d="M9.3,23.1H4.4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S9.9,23.1,9.3,23.1z"
			/>
			<path
				fill={fill}
				d="M45.8,23.1h-5.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h5.3c0.6,0,1,0.4,1,1S46.4,23.1,45.8,23.1z"
			/>
			<path
				fill={fill}
				d="M14,12c-0.3,0-0.5-0.1-0.7-0.3L9.8,8.2C9.4,7.8,9.4,7.1,9.9,6.8c0.4-0.3,0.9-0.3,1.3,0l3.5,3.5
				c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0C14.5,11.9,14.3,12,14,12z"
			/>
			<path
				fill={fill}
				d="M39.7,37.8c-0.3,0-0.5-0.1-0.7-0.3l-3.8-3.8c-0.4-0.4-0.3-1.1,0.1-1.4c0.4-0.3,0.9-0.3,1.3,0l3.8,3.7
				c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0C40.3,37.6,40,37.7,39.7,37.8z"
			/>
			<path
				fill={fill}
				d="M10.5,37.8c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.6,0.3-0.8l3.5-3.5c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-3.5,3.5
				C11,37.7,10.7,37.8,10.5,37.8z"
			/>
			<path
				fill={fill}
				d="M36,12.2c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7L39,6.8c0.4-0.4,1-0.4,1.4,0c0,0,0,0,0,0c0.4,0.4,0.4,1,0,1.4
				L36.7,12C36.5,12.2,36.2,12.3,36,12.2z"
			/>
			<path
				fill={fill}
				d="M25.1,7.8c-0.6,0-1-0.4-1-1V4.3c0-0.6,0.4-1,1-1s1,0.4,1,1v2.4C26.1,7.3,25.7,7.8,25.1,7.8z"
			/>
		</svg>
	) : (
		<svg x="0px" y="0px" width={50} height={50}>
			<path
				fill={fill}
				d="M21.1,40.1h7.8c0.6,0,1.1,0.5,1.1,1.1l0,0c0,0.6-0.5,1.1-1.1,1.1h-7.8c-0.6,0-1.1-0.5-1.1-1.1l0,0
	C20,40.6,20.5,40.1,21.1,40.1z"
			/>
			<path
				fill={fill}
				d="M21.1,44h7.8c0.6,0,1.1,0.5,1.1,1.1v0.4c0,0.6-0.5,1.1-1.1,1.1h-7.8c-0.6,0-1.1-0.5-1.1-1.1v-0.4
	C20,44.5,20.5,44,21.1,44z"
			/>
			<path
				fill={fill}
				d="M9.3,23.1H4.4c-0.6,0-1-0.4-1-1s0.4-1,1-1h4.9c0.6,0,1,0.4,1,1S9.9,23.1,9.3,23.1z"
			/>
			<path
				fill={fill}
				d="M45.8,23.1h-5.3c-0.6,0-1-0.4-1-1s0.4-1,1-1h5.3c0.6,0,1,0.4,1,1S46.4,23.1,45.8,23.1z"
			/>
			<g>
				<path
					fill={fill}
					d="M36.4,22.3c0,1.9-0.5,3.8-1.4,5.5l-1.5-1.5c0.6-1.2,0.9-2.5,0.9-3.9c0-5.3-4.2-9.5-9.4-9.5h-0.4
		c-1.3,0.1-2.5,0.4-3.6,0.9l-1.5-1.5c1.5-0.8,3.2-1.3,5-1.4H25C31.3,10.9,36.4,16.1,36.4,22.3z"
				/>
				<path
					fill={fill}
					d="M31,32.3c-0.7,0.9-1,2-1,3.3v2.7H19.9v-2.8c0-1.6-0.8-3.2-2.1-4.2c-2.7-2.2-4.3-5.4-4.3-8.9
		c0-2.2,0.7-4.2,1.7-5.9l1.5,1.5c-0.7,1.3-1.1,2.9-1.2,4.5c0,2.8,1.3,5.5,3.5,7.3c1.8,1.3,2.9,3.4,2.9,5.7v0.9H28v-0.7
		c-0.1-1.7,0.5-3.4,1.6-4.7L31,32.3z"
				/>
			</g>
			<path
				fill={fill}
				d="M9.8,8.2C9.4,7.8,9.4,7.1,9.9,6.8c0.4-0.3,0.9-0.3,1.3,0L40.4,36c0.4,0.4,0.4,1,0,1.4l0,0
	c-0.1,0.2-0.4,0.3-0.7,0.4c-0.3,0-0.5-0.1-0.7-0.3L9.8,8.2z"
			/>
			<path
				fill={fill}
				d="M10.5,37.8c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.6,0.3-0.8l3.5-3.5c0.4-0.4,1.1-0.4,1.5,0s0.4,1.1,0,1.5l-3.5,3.5
	C11,37.7,10.7,37.8,10.5,37.8z"
			/>
			<path
				fill={fill}
				d="M36,12.2c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7L39,6.8c0.4-0.4,1-0.4,1.4,0l0,0c0.4,0.4,0.4,1,0,1.4L36.7,12
	C36.5,12.2,36.2,12.3,36,12.2z"
			/>
			<path
				fill={fill}
				d="M25.1,7.8c-0.6,0-1-0.4-1-1V4.3c0-0.6,0.4-1,1-1s1,0.4,1,1v2.4C26.1,7.3,25.7,7.8,25.1,7.8z"
			/>
		</svg>
	);
};