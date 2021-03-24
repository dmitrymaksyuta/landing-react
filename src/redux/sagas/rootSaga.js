import { all, call } from 'redux-saga/effects';
import prefixCountry from './prefixCountry';
import validations from './validations';

const sagasList = [
    prefixCountry,
    validations,
];

export default function* watchRootSaga() {
    yield all(sagasList.map(saga => call(saga)));
}
