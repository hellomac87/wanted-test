import produce from "immer";
const initialState = {
  countries: [],
  employee_count: [],
  job_sort: [],
  years: [],

  selected_job_sort: {},
  selected_countries: {},
  selected_year: {},
  selected_locations: []
};

export const LOAD_FILTERS_REQUEST = "LOAD_FILTERS_REQUEST";
export const LOAD_FILTERS_SUCCESS = "LOAD_FILTERS_SUCCESS";
export const LOAD_FILTERS_FAILURE = "LOAD_FILTERS_FAILURE";

export const CHANGE_JOB_SORT = "CHANGE_JOB_SORT";
export const CHANGE_COUNTRIES = "CHANGE_COUNTRIES";
export const CHANGE_YEARS = "CHANGE_YEARS";

const jobs = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_FILTERS_REQUEST:
        break;
      case LOAD_FILTERS_SUCCESS:
        const { countries, employee_count, job_sort, years } = action.data;
        const selected_job_sort = job_sort.find(item => item.selected === true);
        const selected_countries = countries.find(
          item => item.selected === true
        );
        const selected_year = years.find(item => item.selected === true);

        draft.countries = countries;
        draft.employee_count = employee_count;
        draft.job_sort = job_sort;
        draft.years = years;

        draft.selected_job_sort = selected_job_sort;
        draft.selected_countries = selected_countries;
        draft.selected_year = selected_year;
        break;
      case LOAD_FILTERS_FAILURE:
        break;
      case CHANGE_JOB_SORT:
        draft.selected_job_sort = action.selected_job_sort;
        break;
      case CHANGE_COUNTRIES:
        const selected_countries_sort = state.countries.find(
          item => item.key === action.key
        );
        draft.selected_countries = selected_countries_sort;
        break;
      case CHANGE_YEARS:
        draft.selected_year = action.selected_year;
        break;
    }
  });

export default jobs;
