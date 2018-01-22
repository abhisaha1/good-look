import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class Sizes extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            sizes_uw: this.props.steps.sizes_uw || "",
            sizes_shirts: this.props.steps.sizes_shirts || "",
            sizes_pj: this.props.steps.sizes_pj || "",
            sizes_shoes: this.props.steps.sizes_shoes || ""
        };
    }

    handleClick(e, index, type) {
        e.preventDefault();
        let item = config[type][index];
        this.state[type] = item;
        this.setState(this.state);
    }

    render() {
        const getClass = (item, type) => {
            let found = this.state[type] == item;
            return found ? "selected" : "";
        };
        return (
            <div>
                <Header
                    stepNo={this.props.stepNo}
                    title="My sizes"
                    subtitle="( Select all relevant options )"
                />
                <div className="content">
                    <div className="grid grid-6">
                        {config.sizes_uw.map((item, idx) => {
                            let style = {
                                height: 67
                            };
                            let classes = getClass(item, "sizes_uw");

                            return (
                                <Link
                                    key={idx}
                                    className={classes}
                                    to="#"
                                    onClick={e =>
                                        this.handleClick(e, idx, "sizes_uw")
                                    }
                                >
                                    <div className="grid-item" style={style}>
                                        {item}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <h2 className="subheader">Shirts</h2>
                    <div className="grid grid-8">
                        {config.sizes_shirts.map((item, idx) => {
                            let style = {
                                height: 67
                            };
                            let classes = getClass(item, "sizes_shirts");

                            return (
                                <Link
                                    key={idx}
                                    className={classes}
                                    to="#"
                                    onClick={e =>
                                        this.handleClick(e, idx, "sizes_shirts")
                                    }
                                >
                                    <div className="grid-item" style={style}>
                                        {item}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <h2 className="subheader">Pants & Jeans</h2>
                    <div className="grid grid-10">
                        {config.sizes_pj.map((item, idx) => {
                            let style = {
                                height: 67
                            };
                            let classes = getClass(item, "sizes_pj");

                            return (
                                <Link
                                    key={idx}
                                    className={classes}
                                    to="#"
                                    onClick={e =>
                                        this.handleClick(e, idx, "sizes_pj")
                                    }
                                >
                                    <div className="grid-item" style={style}>
                                        {item}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <h2 className="subheader">Shoes UK/EU</h2>
                    <div className="grid grid-7">
                        {config.sizes_shoes.map((item, idx) => {
                            let style = {
                                height: 67
                            };
                            let classes = getClass(item, "sizes_shoes");

                            return (
                                <Link
                                    key={idx}
                                    className={classes}
                                    to="#"
                                    onClick={e =>
                                        this.handleClick(e, idx, "sizes_shoes")
                                    }
                                >
                                    <div className="grid-item" style={style}>
                                        {item}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                {this.state.sizes_uw != "" &&
                    this.state.sizes_shirts != "" &&
                    this.state.sizes_pj != "" &&
                    this.state.sizes_shoes != "" && (
                        <Next
                            saveStepData={this.props.saveStepData}
                            state={this.state}
                        />
                    )}
            </div>
        );
    }
}

Sizes.defaultProps = {
    steps: {
        fits: [],
        patterns: []
    }
};
