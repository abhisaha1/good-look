import React, { Component } from "react";
import { Route } from "react-router-dom";
import State from "./State";
import NavBar from "../components/Navbar";
import Main from "./Main";
import Mode from "./steps/Mode";
import Appointment from "./steps/Appointment";
import Occasion from "./steps/Occasion";
import Style from "./steps/Style";
import Brand from "./steps/Brand";
import Wear from "./steps/Wear";
import Fits from "./steps/Fits";
import Outwear from "./steps/Outwear";
import Pants from "./steps/Pants";
import Suits from "./steps/Suits";
import Shoes from "./steps/Shoes";
import Sizes from "./steps/Sizes";
import Budget from "./steps/Budget";
import About from "./steps/About";
import Done from "./steps/Done";
import Steps from "../components/Steps";

import "../../public/scss/style.scss";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Steps {...this.props} />
                    <Route
                        exact
                        path="/"
                        component={props => <Mode {...props} {...this.props} />}
                    />
                    <Route
                        exact
                        path="/1"
                        component={props => <Mode {...props} {...this.props} />}
                    />
                    <Route
                        exact
                        path="/2"
                        component={props => (
                            <Appointment {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/3"
                        component={props => (
                            <Occasion {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/4"
                        component={props => (
                            <Style {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/5"
                        component={props => (
                            <Brand {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/6"
                        component={props => <Wear {...props} {...this.props} />}
                    />
                    <Route
                        exact
                        path="/7"
                        component={props => <Fits {...props} {...this.props} />}
                    />
                    <Route
                        exact
                        path="/8"
                        component={props => (
                            <Outwear {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/9"
                        component={props => (
                            <Pants {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/10"
                        component={props => (
                            <Suits {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/11"
                        component={props => (
                            <Shoes {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/12"
                        component={props => (
                            <Sizes {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/13"
                        component={props => (
                            <Budget {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/14"
                        component={props => (
                            <About {...props} {...this.props} />
                        )}
                    />
                    <Route
                        exact
                        path="/15"
                        component={props => <Done {...props} {...this.props} />}
                    />
                </div>
            </div>
        );
    }
}

export default State(App);
