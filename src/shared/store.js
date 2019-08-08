import {createStore} from 'redux';


const baseState = {
	title: "This is a successful app",
	subTitle: "- powered by React + React Native"
};

const reducer = state => state;

export const store = createStore(reducer, baseState);
