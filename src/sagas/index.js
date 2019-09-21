import { all } from "redux-saga/effects";
import jobsSaga from "./jobs";
import filtersSaga from "./filter";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([jobsSaga(), filtersSaga()]);
}
