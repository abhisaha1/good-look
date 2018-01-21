import React, { Component } from "react";
import { withRouter } from "react-router";
import { Storage, saveStepData, getTempData } from "../utils/common";

const State = WrappedComponent => {
    class A extends Component {
        constructor(props) {
            super(props);
            this.changeStep = this.changeStep.bind(this);
            this.nextStep = this.nextStep.bind(this);
            this.saveStepData = this.saveStepData.bind(this);
            this.getImage = this.getImage.bind(this);
            this.totalSteps = 15;
            let data = Storage.get("data");

            let initialState = {
                stepNo: 1,
                stepsCompleted: 0,
                steps: {}
            };

            this.state = {
                ...initialState,
                ...data
            };
        }
        componentDidMount() {
            //  Get the current step from the url param.
            //  The first step will not have a param, so set 1 as default

            const currentStep = parseInt(
                this.props.location.pathname.replace("/", "") || 1
            );

            // bring the user back if he tries to hop
            if (currentStep > this.state.stepsCompleted + 1) {
                this.changeStep(this.state.stepsCompleted + 1);
            } else {
                this.state.stepNo = currentStep;
                this.setState(this.state);
            }
            saveStepData(this.state);
        }

        getImage = item => {
            let ASSETS = "public/";
            if (window.ENV == "dev") {
                ASSETS = "/";
            }
            return ASSETS + "images/" + this.state.stepNo + "/" + item.image;
        };

        changeStep(stepNo) {
            if (this.state.stepsCompleted + 1 >= stepNo) {
                this.setState({ stepNo });
                this.props.history.push("/" + stepNo);
            }
        }

        nextStep(stepNo) {
            //  proceed to next step. this means, the previous step has been completed
            this.setState({ stepNo, stepsCompleted: stepNo - 1 }, () => {
                this.props.history.push("/" + stepNo);
            });
        }

        saveStepData(obj) {
            saveStepData(obj);
            let nextStep = this.state.stepNo + 1;
            this.setState(
                {
                    steps: getTempData().steps,
                    stepsCompleted: this.state.stepNo,
                    stepNo: nextStep
                },
                () => {
                    saveStepData(this.state);
                    if (nextStep === 15) {
                        window.saveData(this.state.steps);
                    }
                }
            );
            this.props.history.push("/" + nextStep);
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                    changeStep={this.changeStep}
                    nextStep={this.nextStep}
                    saveStepData={this.saveStepData}
                    getImage={this.getImage}
                />
            );
        }
    }

    return withRouter(A);
};

export default State;
