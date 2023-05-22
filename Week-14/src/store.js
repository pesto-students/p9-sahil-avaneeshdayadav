import { createStore } from "redux";

const initialState = {
  lightedness: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIGHT":
      return { lightedness: true };
    case "DARK":
      return { lightedness: false };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
