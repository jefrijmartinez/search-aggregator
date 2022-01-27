import NewsItem from "./NewsItem";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  const propsPassed = { ...props };
  const wrapper = shallow(<NewsItem {...propsPassed} />);
  return wrapper;
};

describe("NewsItem", () => {
  it("should render without errors", () => {
    const component = setup();
    const wrapper = component.find(".news-item");
    expect(wrapper.length).toBe(1);
  });
});
