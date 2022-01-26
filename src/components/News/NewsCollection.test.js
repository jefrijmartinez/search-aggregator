import NewsCollection from "./NewsCollection";
import { shallow } from "enzyme";

describe("NewsCollection", () => {
  it("should render without errors", () => {
    const component = shallow(<NewsCollection news={[]} />);
    const wrapper = component.find(".news-collection");
    expect(wrapper.length).toBe(1);
  });
});
