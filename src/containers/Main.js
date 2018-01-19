import React, { Component } from "react";

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

export default Main;
