import "../../setupTests";
import * as actions from "../../actions/turnActions.js";

describe("Test turn-based actions", () => {
  it("tests play action creator", () => {
    const result = actions.play();
    expect(result).toEqual({ type: "PLAY" });
  });

  it("tests play action creator", () => {
    const result = actions.stop();
    expect(result).toEqual({ type: "STOP" });
  });

  it("tests addPlayer action creator", () => {
    const result = actions.addPlayer("test");
    expect(result).toEqual({ type: "ADD_PLAYER" });
  });

  it("tests nextPlayer action creator", () => {
    const result = actions.nextPlayer("test");
    expect(result).toEqual({ type: "NEXT_PLAYER" });
  });
});
