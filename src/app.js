import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Match, Miss } from "react-router";
import { HashRouter } from "react-router-dom";
import store from "./redux/createStore";
import Main from "./containers/Main";
import App from "./containers/App";
import routes from "./routes";
import history from "./history";

const render = App => {
    ReactDOM.render(
        <HashRouter history={history}>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>,
        document.getElementById("app")
    );
};
render(App);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept();
    const NextApp = require("./containers/App").default;
    render(NextApp);
}
