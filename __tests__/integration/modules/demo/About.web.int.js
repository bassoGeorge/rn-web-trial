import React from 'react'
import {render} from '@testing-library/react'
import WithStore from '../../../helpers/with-store'
import {createStore} from 'redux'
import {WithWebRouter} from '../../../helpers/with-web-router'
import About from '../../../../src/modules/demo/components/about/About.web'
import {appReducer} from '../../../../src/store'
import userEvent from '@testing-library/user-event'
import {Route} from 'react-router'

const store = createStore(appReducer, {title: "::testing_title::", subTitle: "::testing_sub_title::"})

const MockDetails = ({location}) => (
	<div data-testid="mock-details">MockLocation: {location.pathname}{location.search}</div>
)

const {getByText, queryByText, queryByTestId} = render(
	<WithWebRouter>
		<WithStore store={store}>
			<About/>

			<Route path='/details' component={MockDetails}/>
		</WithStore>
	</WithWebRouter>
)

it("Just about does what it needs to do", () => {
	expect(getByText("::testing_title:: | About Page")).toBeTruthy()
	expect(queryByTestId("mock-details")).toBeFalsy()
	const button = getByText("Deep link")
	userEvent.click(button)

	expect(queryByText("MockLocation: /details?name=Ajeeb&id=blah")).toBeTruthy()
})
