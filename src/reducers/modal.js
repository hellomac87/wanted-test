const initialState = {
  isOpen: false
};

export const FILTER_MODAL_OPEN = "FILTER_MODAL_OPEN";
export const FILTER_MODAL_CLOSE = "FILTER_MODAL_CLOSE";

const jobs = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MODAL_OPEN: {
      return {
        ...state,
        isOpen: true
      };
    }
    case FILTER_MODAL_CLOSE: {
      return {
        ...state,
        isOpen: false
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default jobs;
