import React from 'react'
import {render} from '@testing-library/react-native'
import WithStore from '../../../helpers/with-store'
import {createStore} from 'redux'
import About from '../../../../src/modules/demo/components/about/About.ios'
import {appReducer} from '../../../../src/store'

const store = createStore(appReducer, {title: "::testing_title::", subTitle: "::testing_sub_title::"})

const {getByText, queryByText, queryByTestId} = render(
	<WithStore store={store}>
		<About/>
	</WithStore>
)

it("Just about does what it needs to do", () => {
	expect(getByText("::testing_title:: | About Page")).toBeTruthy()
	expect(queryByTestId("mock-details")).toBeFalsy()
	//const button = getByText("Deep navigation check")
	//userEvent.click(button)

	//expect(queryByText("MockLocation: /details?name=Ajeeb&id=blah")).toBeTruthy()
})
