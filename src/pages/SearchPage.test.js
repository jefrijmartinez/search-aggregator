import SearchPage from "./SearchPage";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import { storeFactory } from "../test/testUtils";
import { BrowserRouter } from "react-router-dom";
import * as actions from "../store/actions/search.actions";
import * as router from "react-router-dom";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    </Provider>
  );
  return wrapper;
};

jest.mock("../store/actions/search.actions.js", () => {
  const realImplementation = jest.requireActual(
    "../store/actions/search.actions.js"
  );
  return {
    _esModule: true,
    ...realImplementation,
    searchRequest: jest
      .fn()
      .mockReturnValue({ type: "SEARCH_REQUEST", payload: {} }),
  };
});

jest.mock("react-router-dom", () => {
  const realImplementation = jest.requireActual("react-router-dom");
  return {
    _esModule: true,
    ...realImplementation,
    useLocation: () => {
      return {
        search: "?query=value&source=genews",
      };
    },
  };
});

describe("SearchPage", () => {
  it("should dispatch searchRequest once", () => {
    const component = setup({});
    const wrapper = component.find("select");

    wrapper.simulate("change", { target: { value: "gnews" } });

    expect(actions.searchRequest).toHaveBeenCalledTimes(1);
  });

  it("should render without crashing", () => {
    const component = setup({});
    const wrapper = component.find(".search-page");
    expect(wrapper.length).toBe(1);
  });

  it("should display error message when there is an invalid state", () => {
    const initialState = {
      loader: { loading: false },
      search: {
        error: "An error has occurred",
        news: [],
      },
    };
    const component = setup(initialState);
    const wrapper = component.find(".error");
    expect(wrapper.text()).toEqual("An error has occurred");
  });

  it("should display no results when news length is 0", () => {
    const initialState = {
      loader: { loading: false },
      search: {
        error: null,
        news: [],
      },
    };
    const component = setup(initialState);
    const wrapper = component.find("h2");
    expect(wrapper.text()).toEqual("No results");
  });

  it("should not display no results when news length is greater than 0", () => {
    const initialState = {
      loader: { loading: false },
      search: {
        error: null,
        news: [
          {
            title: "test",
            source: { name: "Encora", url: "https://encora.com" },
          },
        ],
      },
    };
    const component = setup(initialState);
    const wrapper = component.find(".no-results");
    expect(wrapper.length).toBe(0);
  });

  it("should display loading indicator when it is set to true", () => {
    const initialState = {
      loader: { loading: true },
      search: {
        error: null,
        news: [],
      },
    };
    const component = setup(initialState);
    const wrapper = component.find(".loading");
    expect(wrapper.length).toBe(1);
  });
});
