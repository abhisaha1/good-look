import ActionTypes from "../actions/ActionTypes";

const initialState = {
    data: "Initial State!",
    user: {},
    loading: true
};

export default function data(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.WELCOME:
            return {
                ...state,
                data: action.payload
            };

        default:
            break;
    }

    return state;
}
