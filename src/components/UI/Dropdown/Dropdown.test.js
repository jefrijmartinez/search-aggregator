import Dropdown from "./Dropdown";
import { shallow } from "enzyme";

const mockSetSelectedValue = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetSelectedValue],
}));

const setup = (props = {}) => {
  const defaultProps = {
    options: [
      { value: "one", text: "One" },
      { value: "two", text: "Two" },
    ],
  };
  const propsPassed = { ...defaultProps, ...props };
  const wrapper = shallow(<Dropdown {...propsPassed} />);
  return wrapper;
};

describe("Dropdown", () => {
  it("should render without errors", () => {
    const component = setup();
    const wrapper = component.find(".dropdown");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct class", () => {
    const component = setup({ className: "test" });
    const wrapper = component.find(".test");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct onChange event", () => {
    const onChange = jest.fn();
    const component = setup({ onChange });
    const wrapper = component.find(".dropdown");
    wrapper.simulate("change", { target: { value: "one" } });
    expect(onChange).toHaveBeenCalled();
  });

  it("should call setSelectedValue when option is selected", () => {
    const onChange = jest.fn();
    const component = setup({ onChange });
    const wrapper = component.find(".dropdown");
    wrapper.simulate("change", { target: { value: "one" } });
    expect(mockSetSelectedValue).toHaveBeenCalled();
  });

  it("should call onChange with right value when option is selected", () => {
    const onChange = jest.fn();
    const component = setup({ onChange });
    const wrapper = component.find(".dropdown");
    wrapper.simulate("change", { target: { value: "one" } });
    expect(onChange).toHaveBeenCalledWith("one");
  });
});
