import { START_LOADING, STOP_LOADING } from "../constants/loading.contants";

const initialState = {
  loading: false,
};

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
