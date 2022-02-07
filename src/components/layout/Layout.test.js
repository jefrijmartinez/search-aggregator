import { mount, shallow } from "enzyme";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render without errors", () => {
    const component = shallow(<Layout />);
    const wrapper = component.find(".main");
    expect(wrapper.length).toBe(1);
  });

  it("should render children properly", () => {
    const component = mount(
      <Layout>
        <span>Hello World</span>
      </Layout>
    );
    const wrapper = component.find("span");
    expect(wrapper.length).toBe(1);
    expect(wrapper.text()).toBe("Hello World");
  });
});
