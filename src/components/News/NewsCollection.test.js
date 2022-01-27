import NewsCollection from "./NewsCollection";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  const defaultProps = {
    news: [],
  };
  const propsPassed = { ...defaultProps, ...props };
  const wrapper = shallow(<NewsCollection {...propsPassed} />);
  return wrapper;
};

describe("NewsCollection", () => {
  it("should render without errors", () => {
    const component = setup();
    const wrapper = component.find(".news-collection");
    expect(wrapper.length).toBe(1);
  });
});
