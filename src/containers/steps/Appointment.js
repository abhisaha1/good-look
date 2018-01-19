import React, { Component } from "react";
import Header from "../../components/Header";
import Select from "react-select";
import { config } from "../../utils/common";
import PropTypes from "prop-types";
import Calendar from "../../utils/Calendar";
import Next from "../../components/Next";

const styles = {
    block: {
        padding: 60,
        background: "#FFF",
        margin: "40px 34px"
    },
    cityBlock: {
        padding: "50px 0px"
    }
};

export default class Appointment extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        let date = new Date();
        if (this.props.steps.date) {
            date = new Date(this.props.steps.date);
        }
        this.state = {
            location: this.props.steps.location,
            dayPhase: this.props.steps.dayPhase,
            date: date
        };
    }
    componentDidMount() {
        Calendar.init(this.state.date, date => {
            // on date select
            this.setState({ date });
        });
    }

    handleChange(obj) {
        this.setState({ ...obj });
    }

    render() {
        const cities = Object.keys(config.cities).map(key => {
            return { value: key, label: config.cities[key] };
        });

        const dayPhases = Object.keys(config.dayPhase).map((key, i) => {
            let checked = {};
            if (this.state.dayPhase === key) {
                checked.defaultChecked = "checked";
            }
            return (
                <span key={i}>
                    <input
                        id={"rb-" + key}
                        className="rb"
                        type="radio"
                        name="options"
                        value={key}
                        {...checked}
                        onChange={e =>
                            this.handleChange({ dayPhase: e.target.value })
                        }
                    />
                    <label htmlFor={"rb-" + key}>{config.dayPhase[key]}</label>
                </span>
            );
        });
        return (
            <div>
                <Header
                    stepNo={this.props.stepNo}
                    title="Choose your styling method"
                />
                <div className="content">
                    <div className="row" style={styles.block}>
                        <div className="col-lg-5">
                            <div className="cal">
                                <div className="cal__header">
                                    <button
                                        className="btn btn-action btn-link btn-lg"
                                        data-calendar-toggle="previous"
                                    >
                                        <svg
                                            width="20"
                                            height="12"
                                            viewBox="0 0 80 80"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="#000000"
                                                strokeWidth="12"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                points="45.63,75.8 0.375,38.087 45.63,0.375 "
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        className="cal__header__label"
                                        data-calendar-label="month"
                                    >
                                        March 2017
                                    </div>
                                    <button
                                        className="btn btn-action btn-link btn-lg"
                                        data-calendar-toggle="next"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="12"
                                            viewBox="0 0 80 80"
                                        >
                                            <polyline
                                                fill="none"
                                                stroke="#000000"
                                                strokeWidth="12"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                points="0.375,0.375 45.63,38.087 0.375,75.8 "
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="cal__week">
                                    <span>Mon</span> <span>Tue</span>
                                    <span>Wed</span> <span>Thu</span>{" "}
                                    <span>Fri</span> <span>Sat</span>{" "}
                                    <span>Sun</span>
                                </div>
                                <div
                                    className="cal__body"
                                    data-calendar-area="month"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 city-block">
                            <div style={styles.cityBlock}>
                                <Select
                                    value={this.state.location}
                                    onChange={selectedOption =>
                                        this.handleChange({
                                            location: selectedOption.value
                                        })
                                    }
                                    options={cities}
                                    searchable={false}
                                    clearable={false}
                                />
                            </div>
                            <div className="location">
                                <div className="rb-wrapper">{dayPhases}</div>
                            </div>
                        </div>
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

Appointment.defaultProps = {
    steps: {
        location: "BB",
        dayPhase: "MORNING",
        date: Date.now()
    }
};
