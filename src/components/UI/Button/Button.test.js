import Button from "./Button";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  const propsPassed = { ...props };
  const wrapper = shallow(<Button {...propsPassed}>Test</Button>);
  return wrapper;
};

describe("Button", () => {
  it("should render without errors", () => {
    const component = setup();
    const wrapper = component.find(".btn");
    expect(wrapper.length).toBe(1);
  });

  it("should render children", () => {
    const component = setup();
    const wrapper = component.find(".btn");
    expect(wrapper.text()).toBe("Test");
  });

  it("should render with correct class", () => {
    const component = setup({ className: "test" });
    const wrapper = component.find(".test");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct type", () => {
    const component = setup({ type: "submit" });
    const wrapper = component.find(".btn");
    expect(wrapper.props().type).toBe("submit");
  });

  it("should handle onClick event", () => {
    const onClick = jest.fn();
    const component = setup({ onClick });
    const wrapper = component.find(".btn");
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
