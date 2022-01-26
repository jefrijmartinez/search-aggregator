import Button from "./Button";
import { shallow } from "enzyme";

describe("Button", () => {
  it("should render without errors", () => {
    const component = shallow(<Button />);
    const wrapper = component.find(".btn");
    expect(wrapper.length).toBe(1);
  });

  it("should render children", () => {
    const component = shallow(<Button>Test</Button>);
    const wrapper = component.find(".btn");
    expect(wrapper.text()).toBe("Test");
  });

  it("should render with correct class", () => {
    const component = shallow(<Button className="test">Test</Button>);
    const wrapper = component.find(".test");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct type", () => {
    const component = shallow(<Button type="submit">Test</Button>);
    const wrapper = component.find(".btn");
    expect(wrapper.props().type).toBe("submit");
  });

  it("should handle onClick event", () => {
    const onClick = jest.fn();
    const component = shallow(<Button onClick={onClick}>Test</Button>);
    const wrapper = component.find(".btn");
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
