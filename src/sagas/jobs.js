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
  const { countries, employee_count, job_sort, years } = action.data;
  const selected_job_sort = job_sort.find(item => item.selected === true);
  const selected_countries = countries.find(item => item.selected === true);
  const selected_year = years.find(item => item.selected === true);
  const selected_locations = [];
  const params = {
    tag_type_id: 669,
    job_sort: selected_job_sort.key,
    country: selected_countries.key,
    years: selected_year.key,
    locations: selected_locations[0]
  };
  try {
    // API 호출
    const result = yield call(loadJobsAPI, params);
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
