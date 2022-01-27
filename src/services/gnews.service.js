import axios from "axios";
import { GNEWS_API_URL, GNEWS_KEY } from "../api/index";
import moment from "moment";

export class GNewsService {
  async getNews(query, page, max) {
    const response = await axios.get(GNEWS_API_URL, {
      params: {
        q: query,
        page: page,
        max: max,
        token: GNEWS_KEY,
      },
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const { articles } = response.data;
    const news = articles.map((article, index) => {
      return {
        id: `gnews_${index}`,
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.image,
        publishedAt: moment(
          article.publishedAt,
          "YYYY-MM-DD HH:mm:ss Z"
        ).format("LL"),
        source: {
          name: "GNews",
          author: article.source.name,
          url: article.source.url,
        },
      };
    });
    return news;
  }
}
