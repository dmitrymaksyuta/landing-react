import actions from "../actions";

export default function (state = 7, action) {
    switch (action.type) {
        case actions.SET_PREFIX_COUNTRY:
            return action.payload;
        default:
            return state;
    }
}
