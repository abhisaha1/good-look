import ActionTypes from "../actions/ActionTypes";

const initialState = {
    name: "Unknown"
};

export default function data(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN:
            return {
                ...state,
                name: action.payload
            };
        default:
            break;
    }

    return state;
}
