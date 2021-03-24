import { put, takeEvery } from 'redux-saga/effects';
import actions from "../actions";
import countries from "../../constants/countries.json";

export default function* prefixCountry() {
    yield takeEvery(actions.PREFIX_COUNTRY, addPrefixCountry);
}

export function* addPrefixCountry(action) {
    if (!action && !action.payload) return;

    try {
        let prefix;
        Object.keys(countries).map((item) => {
            if (countries[item].name === action.payload) {
                prefix = countries[item].prefix;
            }
        })
        yield put({type: actions.SET_PREFIX_COUNTRY, payload: prefix});
    } catch (error) {
        console.log(error);
    }
}
