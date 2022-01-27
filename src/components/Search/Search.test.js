import Search from "./Search";
import { mount } from "enzyme";

const setup = (props = {}) => {
  const defaultProps = {};
  const propsPassed = { ...defaultProps, ...props };
  const wrapper = mount(<Search {...propsPassed} />);
  return wrapper;
};

describe("Search", () => {
  it("should render without errors", () => {
    const component = setup();
    const wrapper = component.find(".search");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct class", () => {
    const component = setup({ className: "test" });
    const wrapper = component.find("div.test");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct placeholder", () => {
    const component = setup({ placeholder: "test" });
    const wrapper = component.find("input");
    expect(wrapper.props().placeholder).toBe("test");
  });

  it("should call onSearch event when button is clicked", () => {
    const onSearch = jest.fn();
    const expectation = { query: "test", source: "all" };
    const component = setup({
      onSearch,
      queryValue: "test",
      sourceValue: "all",
    });
    const wrapper = component.find("button");
    wrapper.simulate("click");
    expect(onSearch).toHaveBeenCalledWith(expectation);
  });

  it("should call onSearch event when enter key is pressed over input", () => {
    const onSearch = jest.fn();
    const expectation = { query: "test", source: "all" };
    const component = setup({
      onSearch,
      queryValue: "test",
      sourceValue: "all",
    });
    const wrapper = component.find("input");
    wrapper.simulate("keypress", { charCode: 13 });
    expect(onSearch).toHaveBeenCalledWith(expectation);
  });

  it("should call onSourceChange event when dropdown is changed", () => {
    const onSourceChange = jest.fn();
    const expectation = "gnews";
    const component = setup({
      onSourceChange,
      sourceValue: "all",
    });
    const wrapper = component.find("select");
    wrapper.simulate("change", { target: { value: expectation } });
    expect(onSourceChange).toHaveBeenCalledWith(expectation);
  });
});
