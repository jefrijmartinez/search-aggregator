import {
  SEARCH_QUERY_UPDATE,
  SEARCH_SOURCE_UPDATE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_CLEAR,
} from "../constants/search.constants";

const initialState = {
  source: "all",
  query: "",
  max: 15,
  page: 1,
  news: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        source: action.payload.source,
        query: action.payload.query,
        page: action.payload.page,
        max: action.payload.max,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        news: action.payload.news,
      };
    case SEARCH_SOURCE_UPDATE:
      return {
        ...state,
        source: action.payload.source,
      };
    case SEARCH_QUERY_UPDATE:
      return {
        ...state,
        query: action.payload.query,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    case SEARCH_CLEAR:
      return {
        ...state,
        query: "",
      };
    default:
      return state;
  }
};
