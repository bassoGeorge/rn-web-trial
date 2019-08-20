import React from 'react'
import styled from 'styled-components/native'
import {commonPara} from './common-styles';

export default function ScTrial(props) {
	return (
		<Wrapper>
			<Title>Trying out styled components</Title>
			<Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque beatae blanditiis, dicta dolore eligendi error eum fuga in ipsam magnam magni maxime nisi nulla ratione recusandae reiciendis reprehenderit sapiente tempora.</Para>
		</Wrapper>
	)
}

const Title = styled.Text`
	color: red;
	font-size: 20px;
`;

const Para = styled.Text`
	color: #333;
	${commonPara}
`

const Wrapper = styled.View`
	background: #fff;
	padding: 30px;
`
