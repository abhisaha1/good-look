import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getWelcomeData, loginAction } from "../redux/actions/ActionCreators";
import Login, { LoginHeader } from "../components/Login";

import "../../public/scss/style.scss";

class Main extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.history.push("/welcome");
    }

    render() {
        return (
            <div>
                Good Look Design coming up!{" "}
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        welcome: state.welcome,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getWelcomeData,
            loginAction
        },
        dispatch
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
