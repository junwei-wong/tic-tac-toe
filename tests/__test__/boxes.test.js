import { h } from "preact";
import Boxes from "../../src/components/Boxes";
import { shallow } from "enzyme";

describe("Initial Test of the Boxes", () => {
  test("Renders a box and 1 icon", () => {
    const mockBoxValue = "X";
    const mockIndex = 0;
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Boxes
        boxValue={mockBoxValue}
        index={mockIndex}
        changeBoxValue={mockFn}
      />
    );
    expect(wrapper.find(".boxes").length).toBe(1);
    expect(wrapper.find(".icon").length).toBe(1);
  });
  test("Renders X icon after click", () => {
    const mockBoxValue = "X";
    const mockIndex = 0;
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Boxes
        boxValue={mockBoxValue}
        index={mockIndex}
        changeBoxValue={mockFn}
      />
    );
    expect(wrapper.find(".boxes").simulate("click"));
  });
  test("Renders O icon after click", () => {
    const mockBoxValue = "O";
    const mockIndex = 0;
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Boxes
        boxValue={mockBoxValue}
        index={mockIndex}
        changeBoxValue={mockFn}
      />
    );
    expect(wrapper.find(".boxes").simulate("click"));
  });
  test("Renders null after click", () => {
    const mockBoxValue = null;
    const mockIndex = 0;
    const mockFn = jest.fn();
    const wrapper = shallow(
      <Boxes
        boxValue={mockBoxValue}
        index={mockIndex}
        changeBoxValue={mockFn}
      />
    );
    wrapper.find(".boxes").simulate("click");
  });
});
