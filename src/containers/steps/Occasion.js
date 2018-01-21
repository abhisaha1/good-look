import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import PropTypes from "prop-types";
import Next from "../../components/Next";

export default class Occasion extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            occasion: this.props.steps.occasion || []
        };
    }

    handleClick(e, item) {
        e.preventDefault();
        let index = this.state.occasion.indexOf(item.label);
        if (index >= 0) {
            // remove this key
            this.state.occasion.splice(index, 1);
        } else {
            this.state.occasion.push(item.label);
        }
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <Header
                    stepNo={this.props.stepNo}
                    title="What's the occasion"
                    subtitle="( Choose upto three scenarios )"
                />
                <div className="content">
                    <div className="grid">
                        {config.occasion.map((item, i) => {
                            let classes =
                                this.state.occasion.indexOf(item.label) >= 0
                                    ? "selected"
                                    : "";
                            let colorClass =
                                i < 5 ? " grid-dark" : " highlight";
                            return (
                                <Link
                                    key={i}
                                    className={classes}
                                    to="#"
                                    onClick={e => this.handleClick(e, item)}
                                >
                                    <div className={"grid-item" + colorClass}>
                                        <span>{item.label}</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <Next
                    saveStepData={this.props.saveStepData}
                    state={this.state}
                />
            </div>
        );
    }
}

Occasion.defaultProps = {
    steps: {
        occasion: []
    }
};
