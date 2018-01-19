import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class Pants extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            pants: this.props.steps.pants || [],
            pantfits: this.props.steps.pantfits || []
        };
    }

    handleClick(e, index, type) {
        e.preventDefault();
        let item = config.style[index];
        let stateIndex = this.state[type].indexOf(item.label);
        if (stateIndex >= 0) {
            // remove this key
            this.state[type].splice(stateIndex, 1);
        } else {
            this.state[type].push(item.label);
        }
        this.setState(this.state);
    }

    render() {
        const getClass = (item, type) => {
            let found = this.state[type].indexOf(item.label) >= 0;

            return found ? "selected" : "";
        };
        return (
            <div>
                <Header
                    stepNo={this.props.stepNo}
                    title="I like these pants"
                    subtitle="Select all relevant options"
                />
                <div className="content">
                    <div className="grid">
                        {config.pants.map((item, idx) => {
                            let image = this.props.getImage(item);
                            let style = {
                                backgroundImage: `url("${image}")`,
                                height: 600
                            };
                            let classes = getClass(item, "pants");

                            return (
                                <Link
                                    key={idx}
                                    className={classes}
                                    to="#"
                                    onClick={e =>
                                        this.handleClick(e, idx, "pants")
                                    }
                                >
                                    <div
                                        className="grid-item label-bottom"
                                        style={style}
                                    >
                                        <span className="item-label">
                                            {item.label}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <Header title="...And these fits" />
                    <div className="grid">
                        {config.pantfits.map((item, idx) => {
                            let image = this.props.getImage(item);
                            let style = {
                                backgroundImage: `url("${image}")`,
                                height: 600
                            };
                            let classes = getClass(item, "pantfits");

                            return (
                                <Link
                                    key={idx}
                                    className={classes}
                                    to="#"
                                    onClick={e =>
                                        this.handleClick(e, idx, "pantfits")
                                    }
                                >
                                    <div
                                        className="grid-item label-bottom"
                                        style={style}
                                    >
                                        <span className="item-label">
                                            {item.label}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <Next
                        saveStepData={this.props.saveStepData}
                        state={this.state}
                    />
                </div>
            </div>
        );
    }
}

Pants.defaultProps = {
    steps: {
        pants: [],
        pantfits: []
    }
};