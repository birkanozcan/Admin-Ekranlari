import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import reducer from './redux/reducer'
import { FirstAction, FirstState, DispatchType } from './redux/types'
import { BrowserRouter as Router } from "react-router-dom";

const store: Store<FirstState, FirstAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);