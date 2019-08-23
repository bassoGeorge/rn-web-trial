import React from 'react'
import {render} from '@testing-library/react-native'
import {AboutComponent} from './About.ios'

it("just passes", () => {
	const {getByText} = render(<AboutComponent title="__title__"/>)

	expect(getByText("Some more text just to try out")).toBeTruthy()
	expect(getByText("__title__ | About Page")).toBeTruthy()
	expect(getByText("Deep navigation check")).toBeTruthy()
})
