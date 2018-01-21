import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class Budget extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            budget: this.props.steps.budget || ""
        };
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ budget: e.target.value });
    }

    render() {
        return (
            <div>
                <Header stepNo={this.props.stepNo} title="Budget" />
                <div className="content">
                    <div className="text-center" style={{ marginTop: 270 }}>
                        <input
                            className="input-budget text-center"
                            type="text"
                            placeholder="BUDGET IN AUD"
                            onBlur={this.handleChange}
                            defaultValue={this.state.budget}
                        />
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

Budget.defaultProps = {
    steps: {
        budget: ""
    }
};
