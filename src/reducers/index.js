import { combineReducers } from "redux";
import jobs from "./jobs";
import modal from "./modal";

export const rootReducer = combineReducers({
  jobs,
  modal
});
