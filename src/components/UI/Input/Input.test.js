import Input from "../Input/Input";
import { shallow } from "enzyme";

const setup = (props = {}) => {
  const propsPassed = { ...props };
  const wrapper = shallow(<Input {...propsPassed} />);
  return wrapper;
};

describe("Input", () => {
  it("should render without errors", () => {
    const component = setup();
    const wrapper = component.find(".input");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct class", () => {
    const component = setup({ className: "test" });
    const wrapper = component.find(".test");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct type", () => {
    const component = setup({ type: "submit" });
    const wrapper = component.find(".input");
    expect(wrapper.props().type).toBe("submit");
  });

  it("should handle onChange event", () => {
    const onChange = jest.fn();
    const component = setup({ onChange });
    const wrapper = component.find(".input");
    wrapper.simulate("change", { target: { value: "" } });
    expect(onChange).toHaveBeenCalled();
  });
});
