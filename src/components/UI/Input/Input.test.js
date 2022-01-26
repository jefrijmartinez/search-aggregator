import Input from "../Input/Input";
import { shallow } from "enzyme";

describe("Input", () => {
  it("should render without errors", () => {
    const component = shallow(<Input />);
    const wrapper = component.find(".input");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct class", () => {
    const component = shallow(<Input className="test" />);
    const wrapper = component.find(".test");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct type", () => {
    const component = shallow(<Input type="submit" />);
    const wrapper = component.find(".input");
    expect(wrapper.props().type).toBe("submit");
  });

  it("should handle onChange event", () => {
    const onChange = jest.fn();
    const component = shallow(<Input onChange={onChange} />);
    const wrapper = component.find(".input");
    wrapper.simulate("change", { target: { value: "" } });
    expect(onChange).toHaveBeenCalled();
  });
});
