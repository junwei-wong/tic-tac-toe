import { h } from "preact";
import App from "../../src/components/app";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from "enzyme";

describe("Initial Test of the app", () => {
  test("Renders a div with preact_root id", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("#preact_root").length).toBe(1);
  });
});
