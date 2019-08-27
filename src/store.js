import { createStore } from "redux";

const baseState = {
  title: "Trial Combo App",
  subTitle: "- powered by React + React Native"
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "TRIAL":
      return {
        ...state,
        subTitle: "You tried a redux flow for " + action.payload
      };

    default:
      return state;
  }
};

export const store = createStore(appReducer, baseState);
