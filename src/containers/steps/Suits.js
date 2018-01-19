import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class Suits extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            suits: this.props.steps.suits || ""
        };
    }

    handleClick(e, index) {
        e.preventDefault();
        this.state.suits = config.suits[index].label;
        this.setState(this.state);
    }

    render() {
        const getClass = item => {
            return this.state.suits == item.label ? "selected" : "";
        };
        return (
            <div>
                <Header stepNo={this.props.stepNo} title="Suits" />
                <div className="content">
                    <div className="grid">
                        {config.suits.map((item, idx) => {
                            let image = this.props.getImage(item);
                            let style = {
                                backgroundImage: `url("${image}")`,
                                height: 600
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
                    <Next
                        saveStepData={this.props.saveStepData}
                        state={this.state}
                    />
                </div>
            </div>
        );
    }
}

Suits.defaultProps = {
    steps: {
        suits: ""
    }
};
