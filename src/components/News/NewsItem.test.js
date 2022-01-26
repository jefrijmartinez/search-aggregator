import NewsItem from "./NewsItem";
import { shallow } from "enzyme";

describe("NewsItem", () => {
  it("should render without errors", () => {
    const component = shallow(<NewsItem />);
    const wrapper = component.find(".news-item");
    expect(wrapper.length).toBe(1);
  });
});
