import {createStore} from 'redux'
import React from 'react'
import {Provider} from 'react-redux'

const defaultStore = createStore(() => ({}))

export default function WithStore({store = defaultStore, children}) {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}
