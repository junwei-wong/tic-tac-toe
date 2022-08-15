import { h } from "preact";
import Header from "../../src/components/Header";
import { shallow } from "enzyme";

describe("Initial Test of the Header", () => {
  test("Header renders 3 nav items", () => {
    const undoLastMove = jest.fn();
    const resetGame = jest.fn();
    const turn = 1;
    const context = shallow(
      <Header undoLastMove={undoLastMove} resetGame={resetGame} turn={turn} />
    );
    expect(context.find("button").length).toBe(2);
  });
  test("Header renders 3 nav items", () => {
    const undoLastMove = jest.fn();
    const resetGame = jest.fn();
    const turn = 2;
    const context = shallow(
      <Header undoLastMove={undoLastMove} resetGame={resetGame} turn={turn} />
    );
    expect(context.find("button").length).toBe(2);
  });
});
