import ActionTypes from "../ActionTypes";

export function loginAction(name) {
    return function(dispatch, state) {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: name
        });
    };
}

export function logoutAction(name) {
    return function(dispatch, state) {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: name
        });
    };
}
