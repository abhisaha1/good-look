import React, { Component } from "react";

const Header = props => {
    return (
        <div className="page-header">
            <h1>
                {props.stepNo && (
                    <span className="step-no">{props.stepNo}.</span>
                )}
                <span className="step-title">{props.title}</span>
            </h1>
            <span>{props.subtitle}</span>
        </div>
    );
};
export default Header;
