import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class Mode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: this.props.steps.mode
        };
    }

    handleClick(e, key) {
        e.preventDefault();
        this.props.saveStepData({ steps: { mode: key } });
    }

    render() {
        return (
            <div>
                <Header
                    stepNo={this.props.stepNo}
                    title="Choose your styling method"
                />
                <div className="content">
                    <div className="grid">
                        {Object.keys(config.mode).map((key, i) => {
                            let classes =
                                key === this.state.mode ? "selected" : "";
                            return (
                                <Link
                                    key={i}
                                    className={classes}
                                    to="#"
                                    onClick={e => this.handleClick(e, key)}
                                >
                                    <div className="grid-item grid-dark">
                                        {config.mode[key]}
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

Mode.defaultProps = {
    steps: {
        mode: ""
    }
};
