import { h } from "preact";
import GameBoard from "../../src/components/GameBoard";
import { shallow, mount } from "enzyme";

describe("Initial Test of the Header", () => {
  test("Header renders 9 boxes, 1 header and 1 scoreboard", () => {
    const wrapper = shallow(<GameBoard />);
    expect(wrapper.find("Boxes").length).toBe(9);
    expect(wrapper.find("Header").length).toBe(1);
    expect(wrapper.find("ScoreBoard").length).toBe(1);
  });
  test("gameboard simulate o wins box 123", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(0).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(2).simulate("click");
    wrapper.find("Boxes").find("div").at(5).simulate("click");
    wrapper.find("Boxes").find("div").at(1).simulate("click");
  });
  test("gameboard simulate o wins box 147", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(0).simulate("click");
    wrapper.find("Boxes").find("div").at(2).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(5).simulate("click");
    wrapper.find("Boxes").find("div").at(6).simulate("click");
  });
  test("gameboard simulate o wins box 258", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(1).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(4).simulate("click");
    wrapper.find("Boxes").find("div").at(5).simulate("click");
    wrapper.find("Boxes").find("div").at(7).simulate("click");
  });
  test("gameboard simulate o wins box 369", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(2).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(5).simulate("click");
    wrapper.find("Boxes").find("div").at(1).simulate("click");
    wrapper.find("Boxes").find("div").at(8).simulate("click");
  });
  test("gameboard simulate o wins box 159", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(0).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(4).simulate("click");
    wrapper.find("Boxes").find("div").at(1).simulate("click");
    wrapper.find("Boxes").find("div").at(8).simulate("click");
  });
  test("gameboard simulate o wins box 357", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(2).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(4).simulate("click");
    wrapper.find("Boxes").find("div").at(1).simulate("click");
    wrapper.find("Boxes").find("div").at(6).simulate("click");
  });
  test("gameboard simulate x wins box 456", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(0).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(1).simulate("click");
    wrapper.find("Boxes").find("div").at(4).simulate("click");
    wrapper.find("Boxes").find("div").at(7).simulate("click");
    wrapper.find("Boxes").find("div").at(5).simulate("click");
  });
  test("gameboard test undo", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Header").find("button").at(0).simulate("click");
  });
  test("gameboard test reset after o winning box 789", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(6).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(7).simulate("click");
    wrapper.find("Boxes").find("div").at(5).simulate("click");
    wrapper.find("Boxes").find("div").at(8).simulate("click");
    wrapper.find("Header").find("button").at(1).simulate("click");
  });
  test("gameboard test tie alert", () => {
    const wrapper = mount(<GameBoard />);
    wrapper.find("Boxes").find("div").at(0).simulate("click");
    wrapper.find("Boxes").find("div").at(1).simulate("click");
    wrapper.find("Boxes").find("div").at(2).simulate("click");
    wrapper.find("Boxes").find("div").at(5).simulate("click");
    wrapper.find("Boxes").find("div").at(3).simulate("click");
    wrapper.find("Boxes").find("div").at(6).simulate("click");
    wrapper.find("Boxes").find("div").at(4).simulate("click");
    wrapper.find("Boxes").find("div").at(8).simulate("click");
    wrapper.find("Boxes").find("div").at(7).simulate("click");
    wrapper.find("Header").find("button").at(1).simulate("click");
  });
});
