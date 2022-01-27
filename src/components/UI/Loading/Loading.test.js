import Loading from "./Loading";
import { shallow } from "enzyme";

describe("Loading", () => {
  it("should render without errors", () => {
    const component = shallow(<Loading />);
    const wrapper = component.find(".loading");
    expect(wrapper.length).toBe(1);
  });
});
