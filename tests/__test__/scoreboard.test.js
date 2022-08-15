import { h } from "preact";
import ScoreBoard from "../../src/components/ScoreBoard";
import { shallow } from "enzyme";

describe("Initial Test of the ScoreBoard", () => {
  test("Renders 3 - O X - 1", () => {
    const mockXScore = 1;
    const mockOScore = 3;
    const wrapper = shallow(
      <ScoreBoard scoreO={mockOScore} scoreX={mockXScore} />
    );
    expect(wrapper.find("h3").length).toBe(2);
    expect(wrapper.find("h3").at(0).text()).toBe("3 -");
    expect(wrapper.find("h3").at(1).text()).toBe("- 1");
  });
});
