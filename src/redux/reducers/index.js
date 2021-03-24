import { combineReducers } from "redux";
import prefixCountry from "./prefixCountry";
import validation from "./validations";

export default combineReducers({
    prefix: prefixCountry,
    validation: validation,
});
