import actions from "./actions";

export const setPrefixCountry = (payload) => ({type: actions.PREFIX_COUNTRY, payload});
export const setValidationName = (payload) => ({type: actions.VALIDATION_NAME, payload});
export const setValidationLastName = (payload) => ({type: actions.VALIDATION_LAST_NAME, payload});
export const setValidationEmail = (payload) => ({type: actions.VALIDATION_EMAIL, payload});
export const setValidationEPhone = (payload) => ({type: actions.VALIDATION_PHONE, payload});
