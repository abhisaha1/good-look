import React, { Component } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import routes from "../routes";
import Main from "./Main";
import { Route, Switch } from "react-router-dom";

import "../../public/scss/style.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page-container">
                <Route path="/" component={Main} />
                <Route
                    exact
                    path="/welcome"
                    component={() => <div>Wasssssssp!</div>}
                />
            </div>
        );
    }
}

export default App;
