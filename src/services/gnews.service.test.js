import axios from "axios";
import { GNewsService } from "./gnews.service";

jest.mock("axios");

const getResponse = (status, statusText = "") => {
  const data = {
    articles: [
      {
        title: "title",
        description: "description",
        url: "url",
        source: {
          name: "GNews",
          url: "https://www.gnews.io",
        },
      },
    ],
  };
  return { status, statusText, data };
};

describe("GNews News Service", () => {
  let service;

  beforeEach(() => {
    service = new GNewsService();
  });

  it("should return news", async () => {
    const response = getResponse(200);
    axios.get.mockResolvedValue(response);
    const news = await service.getNews("test", 1, 10);
    expect(news.length).toBe(1);
  });

  it("should return error when there is an error", async () => {
    const response = getResponse(500, "Internal Server Error");
    axios.get.mockResolvedValue(response);
    await expect(service.getNews("test", 1, 10)).rejects.toThrow();
  });
});
