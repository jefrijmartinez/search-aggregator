import Search from "../components/Search/Search";
import Loading from "../components/UI/Loading/Loading";
import NewsCollection from "../components/News/NewsCollection";
import {
  searchRequest,
  searchSourceUpdate,
} from "../store/actions/search.actions";
import { useDispatch, useSelector } from "react-redux";
import classes from "./SearchPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const news = useSelector((state) => state.search.news);
  const loading = useSelector((state) => state.loader.loading);
  const error = useSelector((state) => state.search.error);

  const query = new URLSearchParams(location.search).get("query") ?? "";
  const source = new URLSearchParams(location.search).get("source") ?? "";

  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      dispatch(searchRequest(source, query));
    }
  }, [query, source, dispatch]);

  const onHandleSearch = (e) => {
    e.query && dispatch(searchRequest(e.source, e.query));
    navigate({
      pathname: "/",
      search: `?query=${e.query}&source=${e.source}`,
    });
  };

  const onHandleSourceChange = (e) => {
    dispatch(searchSourceUpdate(e));
  };

  return (
    <div className={classes["search-page"]}>
      <Search
        onSearch={onHandleSearch}
        onSourceChange={onHandleSourceChange}
        queryValue={query}
        sourceValue={source}
      />
      {loading ? <Loading /> : <NewsCollection news={news} />}
      {news.length === 0 && !loading && <h2>No results</h2>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default SearchPage;
