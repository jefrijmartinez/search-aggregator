import axios from "axios";
import { CurrentsService } from "./currents.service";

jest.mock("axios");

const getResponse = (status, statusText = "") => {
  const data = {
    news: [
      {
        id: "1",
        title: "title",
        description: "description",
        url: "url",
        author: "author",
      },
    ],
  };
  return { status, statusText, data };
};

describe("Current News Service", () => {
  let service;

  beforeEach(() => {
    service = new CurrentsService();
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
