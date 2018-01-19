import React from "react";

const Next = props => {
    return (
        <div className="row full-width-fixed">
            <div className="col-lg-12 text-right">
                <button
                    className="btn btn-xs btn-dark btn-default"
                    onClick={() =>
                        props.saveStepData({
                            steps: { ...props.state }
                        })
                    }
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Next;
