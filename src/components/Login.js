import React, { Component } from "react";

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: ""
        };
    }

    handleKeyUp(e) {
        this.state.name = e.target.value;
        this.setState(this.state);
    }

    onSubmit() {
        this.props.loginAction(this.state.name);
    }

    render() {
        return (
            <div>
                <div>{this.state.name}</div>
                <input
                    type="text"
                    initalValue={this.state.name}
                    onKeyUp={this.handleKeyUp}
                />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export const LoginHeader = () => {
    return <h1>Login</h1>;
};

export default Login;
