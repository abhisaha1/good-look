import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class About extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        let about = {};
        if (this.props.steps.about) {
            about = this.props.steps.about;
        }
        this.state = {
            about: {
                name: about.name || "",
                email: about.email || "",
                phone: about.phone || "",
                age: about.age || "",
                height: about.height || "",
                weight: about.weight || "",
                houseNo: about.houseNo || "",
                road: about.road || "",
                suburb: about.suburb || "",
                city: about.city || "",
                postcode: about.postcode || "",
                hair: about.hair || "",
                note: about.note || ""
            }
        };
    }

    handleChange(e, key) {
        e.preventDefault();
        this.state.about[key] = e.target.value;
        this.setState(this.state);
    }

    handleClick(e, index, type) {
        e.preventDefault();
        let item = config[type][index];
        this.state.about[type] = item;
        this.setState(this.state);
    }

    render() {
        const styles = {
            input: {
                width: "100%"
            },
            gridHeight: {
                height: 60
            }
        };
        const getClass = (item, type) => {
            let found = this.state.about[type] == item;
            return found ? "selected" : "";
        };
        const about = this.state.about;
        let isValid = true;
        if (about.name == "" || about.email == "" || about.hair == "") {
            isValid = false;
        }

        return (
            <div>
                <Header stepNo={this.props.stepNo} title="About You" />
                <div className="content">
                    <div className="row">
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    className="text-center"
                                    style={styles.input}
                                    type="text"
                                    placeholder="Your name*"
                                    onChange={e => this.handleChange(e, "name")}
                                    defaultValue={this.state.about.name}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    className="text-center"
                                    style={styles.input}
                                    type="text"
                                    placeholder="Your email*"
                                    onChange={e =>
                                        this.handleChange(e, "email")
                                    }
                                    defaultValue={this.state.about.name}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    className="text-center"
                                    style={styles.input}
                                    type="text"
                                    placeholder="Your phone number"
                                    onBlur={e => this.handleChange(e, "phone")}
                                    defaultValue={this.state.about.name}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    className="text-center"
                                    style={styles.input}
                                    type="text"
                                    placeholder="Your age"
                                    onBlur={e => this.handleChange(e, "age")}
                                    defaultValue={this.state.about.name}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    className="text-center"
                                    style={styles.input}
                                    type="text"
                                    placeholder="Your height"
                                    onBlur={e => this.handleChange(e, "height")}
                                    defaultValue={this.state.about.name}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    className="text-center"
                                    style={styles.input}
                                    type="text"
                                    placeholder="Your weight"
                                    onBlur={e => this.handleChange(e, "weight")}
                                    defaultValue={this.state.about.name}
                                />
                            </div>
                        </div>
                    </div>
                    <h2 className="subheader">Your address</h2>
                    <div className="row">
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    style={styles.input}
                                    type="text"
                                    placeholder="House no"
                                    onBlur={e =>
                                        this.handleChange(e, "houseNo")
                                    }
                                    defaultValue={this.state.about.houseNo}
                                />
                            </div>
                        </div>
                        <div className="col-lg-8  mb-20">
                            <div className="text-center">
                                <input
                                    style={styles.input}
                                    type="text"
                                    placeholder="Road"
                                    onBlur={e => this.handleChange(e, "road")}
                                    defaultValue={this.state.about.road}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    style={styles.input}
                                    type="text"
                                    placeholder="Suburb"
                                    onBlur={e => this.handleChange(e, "suburb")}
                                    defaultValue={this.state.about.road}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    style={styles.input}
                                    type="text"
                                    placeholder="City"
                                    onBlur={e => this.handleChange(e, "city")}
                                    defaultValue={this.state.about.road}
                                />
                            </div>
                        </div>
                        <div className="col-lg-4  mb-20">
                            <div className="text-center">
                                <input
                                    style={styles.input}
                                    type="text"
                                    placeholder="Postcode"
                                    onBlur={e =>
                                        this.handleChange(e, "postcode")
                                    }
                                    defaultValue={this.state.about.postcode}
                                />
                            </div>
                        </div>
                    </div>
                    <h2 className="subheader">Hair color</h2>
                    <div className="grid grid-7 mb-20">
                        {config.hair.map((item, idx) => {
                            let classes = getClass(item, "hair");
                            let color = item.replace(" ", "-").toLowerCase();
                            return (
                                <Link
                                    key={idx}
                                    className={classes}
                                    to="#"
                                    onClick={e =>
                                        this.handleClick(e, idx, "hair")
                                    }
                                >
                                    <div
                                        className={"grid-item " + color}
                                        style={styles.gridHeight}
                                    >
                                        {item}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="row">
                        <div className="col-lg-12  mb-20">
                            <h2 className="subheader">Add a note</h2>
                            <div className="text-center">
                                <textarea
                                    style={styles.input}
                                    rows="4"
                                    placeholder="Your message"
                                    onBlur={e => this.handleChange(e, "note")}
                                    defaultValue={this.state.about.note}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {isValid && (
                    <Next
                        saveStepData={this.props.saveStepData}
                        state={this.state}
                    />
                )}
            </div>
        );
    }
}

About.defaultProps = {
    steps: {
        budget: ""
    }
};
