import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import {
  LOAD_JOBS_REQUEST,
  LOAD_JOBS_SUCCESS,
  LOAD_JOBS_FAILURE
} from "../reducers/jobs";
import axios from "axios";

function loadJobsAPI(params) {
  return axios.get("/api/v4/jobs", { params });
}
export function* loadJobs(action) {
  try {
    // API 호출
    const result = yield call(loadJobsAPI, action.params);
    yield put({
      type: LOAD_JOBS_SUCCESS,
      data: result.data
    });
  } catch (e) {
    yield put({
      type: LOAD_JOBS_FAILURE,
      error: e
    });
  }
}

function* watchLoadJobs() {
  yield takeLatest(LOAD_JOBS_REQUEST, loadJobs);
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC

export default function* jobsSaga() {
  yield all([fork(watchLoadJobs)]);
}
