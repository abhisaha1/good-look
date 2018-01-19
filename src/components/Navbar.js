import React, { Component } from "react";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            showNav: false
        };
    }

    handleClick() {
        this.setState({ showNav: !this.state.showNav });
    }

    render() {
        const show = this.state.showNav ? " in" : "";
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            onClick={this.handleClick}
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">
                            Look Good
                        </a>
                    </div>
                    <div className={"collapse navbar-collapse" + show}>
                        <ul className="navbar-nav nav  navbar-right">
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Book Appointment</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;
