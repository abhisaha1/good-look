import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class Shoes extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            shoes: this.props.steps.shoes || []
        };
    }

    handleClick(e, index) {
        e.preventDefault();
        let item = config.shoes[index];
        let stateIndex = this.state.shoes.indexOf(item.label);
        if (stateIndex >= 0) {
            // remove this key
            this.state.shoes.splice(stateIndex, 1);
        } else {
            this.state.shoes.push(item.label);
        }
        this.setState(this.state);
    }

    render() {
        const getClass = item => {
            let found = this.state.shoes.indexOf(item.label) >= 0;

            return found ? "selected" : "";
        };
        return (
            <div>
                <Header
                    stepNo={this.props.stepNo}
                    title="shoes"
                    subtitle="(Select all relevant options)"
                />
                <div className="content">
                    <div className="grid">
                        {config.shoes.map((item, idx) => {
                            let image = this.props.getImage(item);
                            let style = {
                                backgroundImage: `url("${image}")`,
                                height: 368
                            };
                            let classes = getClass(item);

                            return (
                                <Link
                                    key={idx}
                                    className={classes}
                                    to="#"
                                    onClick={e => this.handleClick(e, idx)}
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
                </div>
                <Next
                    saveStepData={this.props.saveStepData}
                    state={this.state}
                />
            </div>
        );
    }
}

Shoes.defaultProps = {
    steps: {
        shoes: []
    }
};
