import { createPhase } from "../src/phase";
test("createPhase test", () => {
    const myFunc = (oldActors, phaseResults) => oldActors;
    expect(createPhase("move", myFunc))
        .toEqual({
        funcName: "move",
        executePhase: myFunc
    });
});
//# sourceMappingURL=phase.test.js.map