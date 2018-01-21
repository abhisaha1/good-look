import React, { Component } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { config } from "../../utils/common";
import Next from "../../components/Next";

export default class Done extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            maxWidth: 856,
            width: "100%",
            background: "#FFF",
            margin: "auto",
            padding: "66px 140px"
        };
        return (
            <div>
                <Header stepNo={this.props.stepNo} title="All Done" />
                <div className="content">
                    <div className="text-center" style={styles}>
                        <h3 className="subtitle">Your booking is confirmed</h3>

                        <div className="message">
                            Your stylist will be in touch with you should we
                            need any further information for your personal
                            styling selection.
                        </div>

                        <h3 className="subtitle">
                            We look forward to styling you
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

Done.defaultProps = {
    steps: {
        budget: ""
    }
};
