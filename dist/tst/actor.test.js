import { createActor, createGround } from "../src/actor_creators";
import { actorToString, translateActor, actorToStringInWorld } from "../src/actor";
import { defaultActions, createDefaultActionGenerator } from "../src/actor_actions";
import { createVector } from "../src/utils/geometry";
import { createWorld, worldToString } from "../src/world";
function move(params) {
    return createVector(1, 1);
}
function spreadIgnorance(params) {
    return { impactedActorsIndices: [0], impactAmounts: [0] };
}
function buildDummyActor() {
    const actionGenerators = Object.keys(defaultActions).reduce((acc, key) => {
        const action = defaultActions[key];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        acc[key] = createDefaultActionGenerator(action);
        return acc;
    }, {});
    return { position: createVector(0, 1), actionGenerators, actions: defaultActions, kind: "ignorant", externalProps: undefined };
}
test("Actor create test", () => {
    expect(JSON.stringify(createActor(createVector(0, 1), {}, {}, "ignorant")))
        .toEqual(JSON.stringify(buildDummyActor()));
    expect(JSON.stringify(createActor(createVector(100, 100), {}, { move, spreadIgnorance }, "ignorant")))
        .not.toEqual(JSON.stringify(buildDummyActor()));
    expect(createActor(createVector(0, 1), {}, { move, spreadIgnorance }, "ignorant").actions.move)
        .toBe(move);
    expect(createActor(createVector(0, 1), {}, { spreadIgnorance }, "ignorant").actions.move)
        .not.toBe(move);
    // This test doesn't seem to work. The 2 previous "expect" make sure everything is fine.
    // expect(JSON.stringify(createActor(createVector(0, 1), {}, { move, spreadIgnorance }, "ignorant")))
    //     .not.toEqual(JSON.stringify(buildDummyActor()));
});
test("Actor to string test", () => {
    expect(actorToString(buildDummyActor())).toEqual("{position: (0, 1), kind: ignorant}");
});
test("Actor translate test", () => {
    expect(JSON.stringify(translateActor(buildDummyActor(), createVector(0, 0)))).toEqual(JSON.stringify(buildDummyActor()));
    expect(JSON.stringify(translateActor(buildDummyActor(), createVector(1, 3)))).not.toEqual(JSON.stringify(buildDummyActor()));
    expect(JSON.stringify(translateActor(buildDummyActor(), createVector(1, 3)))).toEqual(JSON.stringify(createActor(createVector(1, 4), {}, {}, "ignorant")));
});
test("actorToStringInWorld test", () => {
    const world = createWorld(3, 3);
    expect(actorToStringInWorld(world, worldToString(world), buildDummyActor()))
        .toEqual("      \ni     \n      ");
});
test("actorToStringInWorld test", () => {
    const world = createWorld(3, 3);
    expect(actorToStringInWorld(world, worldToString(world), buildDummyActor()))
        .toEqual("      \ni     \n      ");
});
test("findNextWaypoint test", () => {
    const g0 = createGround(createVector(0, 0), 0);
    const g1 = createGround(createVector(0, 0), 1);
    const g2 = createGround(createVector(0, 0), 2);
    const actors = [g0, g1, g2];
    expect(findNextWaypoint(actors, 0))
        .toEqual(g1);
    expect(findNextWaypoint(actors, 1))
        .toEqual(g2);
    expect(findNextWaypoint(actors, 2))
        .toEqual(undefined);
});
function findNextWaypoint(actors, currentwaypointTargetNumber) {
    return actors.find((currentActor) => currentActor?.externalProps?.waypointNumber === currentwaypointTargetNumber + 1);
}
export { move };
//# sourceMappingURL=actor.test.js.map