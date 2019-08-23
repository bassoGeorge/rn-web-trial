import React from 'react'
import {render} from '@testing-library/react'
import About from '../../../src/modules/demo/components/about/About.web'

jest.mock('../../../src/modules/demo/components/about/about.container', () => ({
	AboutContainerGen: Component => () => <Component title="__title__"/>
}))

jest.mock('react-router-dom', () => ({
	Link: (props) => <a href={props.to}>{props.children}</a>
}))

it("just works", () => {
	const {getByText} = render(<About/>)

	expect(getByText("Some more text just to try out")).toBeTruthy()
	expect(getByText("__title__ | About Page")).toBeTruthy()
	expect(getByText("Deep link")).toBeTruthy()
});
