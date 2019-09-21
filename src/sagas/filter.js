import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import {
  LOAD_FILTERS_REQUEST,
  LOAD_FILTERS_SUCCESS,
  LOAD_FILTERS_FAILURE
} from "../reducers/filters";
import axios from "axios";

function loadFiltersAPI() {
  return axios.get("/api/v4/filters");
}

export function* loadFilters(action) {
  try {
    const { data } = yield call(loadFiltersAPI, action.data);

    yield put({
      type: LOAD_FILTERS_SUCCESS,
      data
    });
  } catch (e) {
    yield put({
      type: LOAD_FILTERS_FAILURE,
      error: e
    });
  }
}

function* watchLoadFilters() {
  yield takeLatest(LOAD_FILTERS_REQUEST, loadFilters);
}

export default function* FiltersSaga() {
  yield all([fork(watchLoadFilters)]);
}
