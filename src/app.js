import React from "react";
import ReactDOM from "react-dom";
import { Match, Miss } from "react-router";
import { HashRouter } from "react-router-dom";
import Main from "./containers/Main";
import App from "./containers/App";
import routes from "./routes";

const render = App => {
    ReactDOM.render(
        <HashRouter>
            <App />
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
