import React from "react";

const Next = props => {
    return (
        <div className="row ">
            <div className="col-lg-12 mt-60 text-center">
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
