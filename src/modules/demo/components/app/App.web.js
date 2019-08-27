import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { store } from "../../../../store";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "../home/Home.web";
import ScTrial from "../sc-trial/ScTrial.web";
import About from "../about/About.web";
import { Route } from "react-router";

export class AppComponent extends React.Component {
  render() {
    return (
      <Fragment>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <p className="something">This is some extra type</p>
        </header>
        <Route exact path="/" component={Home} />
        <Route path="/details" component={ScTrial} />
        <Route paht="/about" component={About} />
      </Fragment>
    );
  }
}

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </Provider>
);

export default App;
