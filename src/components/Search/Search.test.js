import Search from "./Search";
import { shallow } from "enzyme";

describe("Search", () => {
  it("should render without errors", () => {
    const component = shallow(<Search />);
    const wrapper = component.find(".search");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct class", () => {
    const component = shallow(<Search className="test" />);
    const wrapper = component.find(".test");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct placeholder", () => {
    const component = shallow(<Search placeholder="Test" />);
    const wrapper = component.find(".input");
    expect(wrapper.props().placeholder).toBe("Test");
  });

  it("should call onSearch event when required", () => {
    const onSearch = jest.fn();
    const component = shallow(<Search onSearch={onSearch} queryValue="Test" />);
    const wrapper = component.find(".button");
    wrapper.simulate("click");
    expect(onSearch).toHaveBeenCalled();
  });
});
