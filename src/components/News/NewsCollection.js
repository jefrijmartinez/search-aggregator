import NewsItem from "./NewsItem";
import classes from "./NewsCollection.module.css";

const NewsCollection = (props) => {
  return (
    <div className={`${props.className || ""} ${classes["news-collection"]}`}>
      {props.news.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            url={news.url}
            image={news.image}
            publishedAt={news.publishedAt}
            sourceName={news.source.name}
            sourceUrl={news.source.url}
          />
        );
      })}
    </div>
  );
};
export default NewsCollection;
