import * as  types from "./actionType";
const initislState = {
    users: [],
    user: {},
    loading: true,
}
const usersReducers = (state = initislState, action) => {
    switch (action.type) {
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case types.DELETE_USERS:
            return {
                ...state,

                loading: false,
            };
        case types.ADD_USERS:
            return {
                ...state,

                loading: false,
            };
        case types.GET_SINGLEUSER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        case types.UPDATE_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
            };
        default:
            return state;

    }
};
export default usersReducers;