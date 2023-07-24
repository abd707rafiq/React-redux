
import { combineReducers } from "redux";
import ChangeTheNumber from "./Updown"; // Correct path to the reducer file

const rootReducer=combineReducers({
    ChangeTheNumber:ChangeTheNumber,



});
export default rootReducer;