import {put, takeEvery} from 'redux-saga/effects';
import actions from "../actions";

export default function* validations() {
    yield takeEvery(actions.VALIDATION_NAME, addValidationName);
    yield takeEvery(actions.VALIDATION_LAST_NAME, addValidationLastName);
    yield takeEvery(actions.VALIDATION_EMAIL, addValidationEmail);
    yield takeEvery(actions.VALIDATION_PHONE, addValidationPhone);
}

export function* addValidationName(action) {
    if (!action && !action.payload) return;

    try {
        const validResult = action.payload.trim().length > 2;
        const message = validResult ? '' : 'Minimum 3 characters';
        yield put({type: actions.SET_VALIDATION_NAME, payload: {validResult, message}});
    } catch (error) {
        console.log(error);
    }
}

export function* addValidationLastName(action) {
    if (!action && !action.payload) return;

    try {
        const validResult = action.payload.trim().length > 2;
        const message = validResult ? '' : 'Minimum 3 characters';
        yield put({type: actions.SET_VALIDATION_LAST_NAME, payload: {validResult, message}});
    } catch (error) {
        console.log(error);
    }
}

export function* addValidationEmail(action) {
    if (!action && !action.payload) return;

    try {
        const emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        const validResult = emailReg.test(action.payload);
        const message = validResult ? '' : 'Email is not valid';
        yield put({type: actions.SET_VALIDATION_EMAIL, payload: {validResult, message}});
    } catch (error) {
        console.log(error);
    }
}

export function* addValidationPhone(action) {
    if (!action && !action.payload) return;

    try {
        const validResult = /^\d{7,20}$/.test(action.payload.trim());
        const message = validResult ? '' : 'Minimum 7, maximum 20 digits';
        yield put({type: actions.SET_VALIDATION_PHONE, payload: {validResult, message}});
    } catch (error) {
        console.log(error);
    }
}
