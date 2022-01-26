import Dropdown from "./Dropdown";
import { shallow } from "enzyme";

describe("Dropdown", () => {
  it("should render without errors", () => {
    const options = [
      { value: "one", text: "One" },
      { value: "two", text: "Two" },
    ];
    const component = shallow(<Dropdown options={options} />);
    const wrapper = component.find(".dropdown");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct class", () => {
    const options = [
      { value: "one", text: "One" },
      { value: "two", text: "Two" },
    ];
    const component = shallow(<Dropdown className="test" options={options} />);
    const wrapper = component.find(".test");
    expect(wrapper.length).toBe(1);
  });

  it("should render with correct onChange event", () => {
    const options = [
      { value: "one", text: "One" },
      { value: "two", text: "Two" },
    ];
    const onChange = jest.fn();
    const component = shallow(
      <Dropdown options={options} onChange={onChange} />
    );
    const wrapper = component.find(".dropdown");
    wrapper.simulate("change", { target: { value: "one" } });
    expect(onChange).toHaveBeenCalled();
  });
});
