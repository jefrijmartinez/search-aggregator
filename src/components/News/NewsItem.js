import classes from "./NewsItem.module.css";

const NewsItem = (props) => {
  return (
    <article className={classes["news-item"]}>
      <section className={classes["news-info"]}>
        <h2>
          <a href={props.url} rel="noreferrer" target="_blank">
            {props.title}
          </a>
        </h2>
        <div className={classes["news-info__article"]}>
          <p className={classes["news-info__content"]}>{props.description}</p>
          {props.image && (
            <img
              className={classes["news-image"]}
              src={props.image}
              alt={props.title}
            />
          )}
        </div>
        <div className={classes["news-info__footer"]}>
          <small className={classes["news-item-date"]}>
            {props.publishedAt}
          </small>
          <small className={classes["news-item-source"]}>
            <a href={props.sourceUrl}>{props.sourceName}</a>
          </small>
        </div>
      </section>
    </article>
  );
};
export default NewsItem;
