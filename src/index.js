import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { debounce } from "lodash/fp";
import configureStore from "./store/configureStore";
import routes from "./routes";
// import "./styles/global.css";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// const renderApp = () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <Router history={history} routes={routes(store)} />
//     </Provider>,
//     document.getElementById("react")
//   );
// };
const renderApp = () => {
  ReactDOM.render(
    <Provider>
      <Router history={history} routes={routes()} />
    </Provider>,
    document.getElementById("react")
  );
};

if (process.env.NODE_ENV !== "production") {
  setTimeout(renderApp, 250);
} else {
  renderApp();
}
