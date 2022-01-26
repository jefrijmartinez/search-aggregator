export class NewsService {
  constructor(gnewsService, currentsService) {
    this.gnewsService = gnewsService;
    this.currentsService = currentsService;
  }

  async getNews(source, query, page, max) {
    switch (source) {
      case "gnews":
        return this.gnewsService.getNews(query, page, max);
      case "currents":
        return this.currentsService.getNews(query, page, max);
      default:
        return new Promise(async (resolve) => {
          const results = await Promise.all([
            this.gnewsService.getNews(query, page, max),
            this.currentsService.getNews(query, page, max),
          ]);
          const news = results.reduce((acc, result) => {
            return acc.concat(result);
          });

          resolve(news);
        });
    }
  }
}
