import {ActionTypes} from "./actionTypes";

const intialState = {
    users: [],
};
export const usersReducer = (state = intialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_USERS:
            return {...state, users: payload};
        default:
            return state;
    }
};