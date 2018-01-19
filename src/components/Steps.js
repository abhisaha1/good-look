import React, { Component } from "react";
import { Link } from "react-router-dom";

const Steps = ({ stepNo, stepsCompleted, changeStep }) => {
    /*-----------------------------
     [Create an array of 14 steps]
     */
    const steps = Array.apply(null, { length: 14 });

    const handleStep = (e, cursor) => {
        e.preventDefault();
        changeStep(cursor);
    };

    const data = steps.map((item, idx) => {
        let i = idx + 1;
        let active = stepNo === i ? "active" : "";
        let clickable = stepsCompleted + 1 >= i ? "clickable" : "";
        return (
            <Link
                className={`page-${i} ${active} step ${clickable}`}
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
