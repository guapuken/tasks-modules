import React from 'react';
import { footer } from '../types/types';

const FooterStr = (props: footer) => {
	const { styleFooter, Footer } = props;
	return (
		<div className="footer__modal" style={styleFooter}>
			<div style={{ maxWidth: '90%' }}>{Footer}</div>
		</div>
	);
};

export default FooterStr;
