const initialState = [];

export const LOAD_JOBS_REQUEST = "LOAD_JOBS_REQUEST";
export const LOAD_JOBS_SUCCESS = "LOAD_JOBS_SUCCESS";
export const LOAD_JOBS_FAILURE = "LOAD_JOBS_FAILURE";

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_JOBS_REQUEST: {
      return {
        ...state
      };
    }
    case LOAD_JOBS_SUCCESS: {
      console.log(action.data);
      return {
        ...state
      };
    }
    case LOAD_JOBS_FAILURE: {
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
