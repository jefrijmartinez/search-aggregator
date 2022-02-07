import { NewsService } from "./news.service";

const getNews = jest.fn().mockResolvedValue([]);

describe("News Service", () => {
  let service;

  beforeEach(() => {
    jest.resetAllMocks();
    service = new NewsService({ getNews }, { getNews });
  });

  it("should call all services when source is all", () => {
    service.getNews("all", "test", 1, 10);
    expect(getNews).toHaveBeenCalledTimes(2);
  });

  it("should call only once when source is gnews", () => {
    service.getNews("gnews", "test", 1, 10);
    expect(getNews).toHaveBeenCalledTimes(1);
  });

  it("should call only once when source is current news", () => {
    service.getNews("currents", "test", 1, 10);
    expect(getNews).toHaveBeenCalledTimes(1);
  });
});
