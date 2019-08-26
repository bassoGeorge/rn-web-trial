import React from 'react'
import {Text} from 'react-native'
import {fireEvent, render} from '@testing-library/react-native'
import WithStore from '../../../helpers/with-store'
import {createStore} from 'redux'
import About from '../../../../src/modules/demo/components/about/About.ios'
import {appReducer} from '../../../../src/store'
import {createAppContainer, createStackNavigator} from 'react-navigation'

const store = createStore(appReducer, {title: "::testing_title::", subTitle: "::testing_sub_title::"})

const MockDetails = ({navigation}) => {
	return (
		<Text>Details Page</Text> // data-testid does not work with react-native
	)
}

const SubjectWithOtherRoutes = createAppContainer(createStackNavigator({
	About  : About,
	Details: MockDetails
}, {
	initialRouteName: "About"
}))

const {getByText, queryByTestId} = render(
	<WithStore store={store}>
		<SubjectWithOtherRoutes/>
	</WithStore>
)

it("Just about does what it needs to do", () => {
	expect(getByText("::testing_title:: | About Page")).toBeTruthy()
	expect(queryByTestId("mock-details")).toBeFalsy()
	const button = getByText("Deep navigation check")
	fireEvent.press(button)

	expect(getByText("Details Page")).toBeTruthy()
})
