import React from 'react';
import styled from 'styled-components';
import {commonPara, commonSubtitle} from './common-styles';

export default function ScTrial({match, location, history}, context) {
	const params = new URLSearchParams(location.search);
	return (
		<div>
			<Title>Trying out styled components</Title>
			<Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae blanditiis, dicta dolore eligendi
				error eum fuga in ipsam magnam magni maxime nisi nulla ratione recusandae reiciendis reprehenderit sapiente
				tempora.</Para>

			<p css={commonSubtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, ipsam.</p>

			<p>We have name: {params.get("name")}</p>
			<p>We have id: {params.get("id")}</p>
			<button onClick={history.goBack}>Go back</button>
		</div>
	);
}

ScTrial.path = 'details'


const Title = styled.h1`
	color: red;
	font-size: 20px;
`;

const Para = styled.p`
	color: #333;
	${commonPara}
`;
