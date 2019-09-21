import { combineReducers } from "redux";
import jobs from "./jobs";
import modal from "./modal";
import filters from "./filters";

export const rootReducer = combineReducers({
  jobs,
  modal,
  filters
});
