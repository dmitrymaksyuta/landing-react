import actions from "../actions";

const initialState = {
    name: {},
    lastName: {},
    email: {},
    phone: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_VALIDATION_NAME:
            return {
                ...state,
                name: action.payload,
            };
        case actions.SET_VALIDATION_LAST_NAME:
            return {
                ...state,
                lastName: action.payload,
            };
        case actions.SET_VALIDATION_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case actions.SET_VALIDATION_PHONE:
            return {
                ...state,
                phone: action.payload,
            };
        default:
            return state;
    }
}
