import Loading from "./Loading";
import { shallow } from "enzyme";

describe("Loading", () => {
  const component = shallow(<Loading />);
  const wrapper = component.find(".loading");

  // Test that the component renders without errors.
  it("should render without errors", () => {
    expect(wrapper.length).toBe(1);
  });
});
