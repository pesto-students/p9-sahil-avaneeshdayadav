import React from "react";
import { Provider } from "react-redux";
import Room from "./room";
import store from "../store";

const App = () => {
  // const lightedness = this.state.isLightOn ? "lit" : "dark";
  return (
    <Provider store={store}>
      <Room />
    </Provider>
  );
};

export default App;
