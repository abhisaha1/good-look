import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class Brand extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            brand: this.props.steps.brand || []
        };
    }

    handleClick(e, index) {
        e.preventDefault();
        let item = config.brand[index];
        let stateIndex = this.state.brand.indexOf(item.label);
        if (stateIndex >= 0) {
            // remove this key
            this.state.brand.splice(stateIndex, 1);
        } else {
            this.state.brand.push(item.label);
        }
        this.setState(this.state);
    }

    render() {
        const getClass = item => {
            let found = this.state.brand.indexOf(item.label) >= 0;

            return found ? "selected" : "";
        };
        return (
            <div>
                <Header
                    stepNo={this.props.stepNo}
                    title="Do you have a brand preference for nay of the below ?"
                    subtitle="( Select all relevant options )"
                />
                <div className="content">
                    <div className="grid grid-6">
                        {config.brand.map((item, idx) => {
                            let image = this.props.getImage(item);
                            let style = {
                                backgroundImage: `url("${image}")`,
                                height: 230
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
                                        <span className="item-label-slim">
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

Brand.defaultProps = {
    steps: {
        brand: []
    }
};
