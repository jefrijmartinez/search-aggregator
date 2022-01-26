import axios from "axios";
import { CURRENT_API_URL, CURRENTS_KEY } from "../api/index";
import moment from "moment";

export class CurrentsService {
  async getNews(query, page, max) {
    const response = await axios({
      method: "GET",
      url: CURRENT_API_URL,
      params: {
        q: query,
        page: page,
        page_size: max,
        apiKey: CURRENTS_KEY,
      },
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const { news: articles } = response.data;
    const news = articles.map((article) => {
      return {
        id: article.id,
        title: article.title,
        description: article.description,
        url: article.url,
        image: article.image && article.image !== "None" ? article.image : null,
        publishedAt: moment(article.published).format("LL"),
        source: {
          name: "Current News",
          author: article.author,
          url: null,
        },
      };
    });
    return news;
  }
}
