const initialState = {
  countries: [],
  employee_count: [],
  job_sort: [],
  years: []
};

export const LOAD_FILTERS_REQUEST = "LOAD_FILTERS_REQUEST";
export const LOAD_FILTERS_SUCCESS = "LOAD_FILTERS_SUCCESS";
export const LOAD_FILTERS_FAILURE = "LOAD_FILTERS_FAILURE";

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILTERS_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_FILTERS_SUCCESS: {
      const { countries, employee_count, job_sort, years } = action.data;
      return {
        ...state,
        countries,
        employee_count,
        job_sort,
        years
      };
    }
    case LOAD_FILTERS_FAILURE: {
      return {
        ...state
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default jobs;
