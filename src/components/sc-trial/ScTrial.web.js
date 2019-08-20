import React from 'react';
import styled from 'styled-components';
import {commonPara} from './common-styles';

export default function ScTrial(props) {
	return (
		<div>
			<Title>Trying out styled components</Title>
			<Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae blanditiis, dicta dolore eligendi
				error eum fuga in ipsam magnam magni maxime nisi nulla ratione recusandae reiciendis reprehenderit sapiente
				tempora.</Para>
		</div>
	);
}

const Title = styled.h1`
	color: red;
	font-size: 20px;
`;

const Para = styled.p`
	color: #333;
	${commonPara}
`;
