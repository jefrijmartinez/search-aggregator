import {
  SEARCH_SOURCE_UPDATE,
  SEARCH_QUERY_UPDATE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_CLEAR,
} from "../constants/search.constants";
import { NewsService, CurrentsService, GNewsService } from "../../services";
import { startLoading, stopLoading } from "./loading.actions";

const currentsService = new CurrentsService();
const gnewsService = new GNewsService();
const newsService = new NewsService(gnewsService, currentsService);

export const searchRequest = (source, query, page = 1, max = 15) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_REQUEST,
      payload: { source, query, page, max },
    });
    dispatch(startLoading());

    newsService
      .getNews(source, query, page, max)
      .then((news) => {
        dispatch({
          type: SEARCH_SUCCESS,
          payload: { news },
        });
      })
      .catch((error) => {
        dispatch({
          type: SEARCH_FAILURE,
          payload: { error },
        });
      })
      .finally(() => {
        dispatch(stopLoading());
      });
  };
};

export const searchQueryUpdate = (query) => ({
  type: SEARCH_QUERY_UPDATE,
  payload: { query },
});

export const searchSourceUpdate = (source) => ({
  type: SEARCH_SOURCE_UPDATE,
  payload: { source },
});

export const searchSuccess = (news) => ({
  type: SEARCH_SUCCESS,
  payload: { news },
});

export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: { error },
});

export const searchClear = () => ({
  type: SEARCH_CLEAR,
});
