import React, { Component } from "react";
import { Link } from "react-router-dom";

const Steps = ({ stepNo, stepsCompleted, changeStep, steps }) => {
    /*-----------------------------
     [Create an array of 15 steps]
     */
    const totalSteps = Array.apply(null, { length: 15 });

    // if the user has selected online then disable step 2
    let disableStep2 = steps.mode === "ONLINE";

    const handleStep = (e, cursor) => {
        e.preventDefault();
        if (cursor == 2 && disableStep2) return;
        changeStep(cursor);
    };

    const data = totalSteps.map((item, idx) => {
        let i = idx + 1;
        let classes = stepNo === i ? "active " : "";
        classes += stepsCompleted + 1 >= i ? "clickable" : "";
        if (i == 2 && disableStep2) {
            classes = classes.replace("clickable", "");
        }

        return (
            <Link
                className={`page-${i} ${classes} step`}
                key={i}
                to=""
                onClick={e => handleStep(e, i)}
            >
                <span />
            </Link>
        );
    });

    return <div className="steps">{data}</div>;
};
export default Steps;
