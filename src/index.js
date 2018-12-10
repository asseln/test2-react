import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import ProductList from "./ProductList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./productReducer";
import App from "./components/App";

//import "./styles.css";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

function App() {
  return (
    <div className="App">
      "Hello React"
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
