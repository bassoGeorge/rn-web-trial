import {createStore} from 'redux';


const baseState = {
	title: "This is a successful app",
	subTitle: "- powered by React + React Native"
};

const reducer = (state, action) => {
	switch (action.type) {
		case "TRIAL":
			return {
				...state,
				subTitle: "You shook things up for " + action.payload
			};

		default: return state
	}
};

export const store = createStore(reducer, baseState);
