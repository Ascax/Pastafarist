import { throwErrorIfUndefined } from "./utils/other_utils";
///
/// 
///
/**
 * This file contains:
 * - getters to get the content of the externalProps field of the given actor of type {@link Actor}
 * - setters to set the externalProps of the given actor to the given value
 */
///
/// 
///
function setConviction(actor, conviction) {
    return { ...actor, externalProps: { ...actor.externalProps, conviction } };
}
function getConviction(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.conviction);
    return actor.externalProps.conviction;
}
function setRange(actor, range) {
    return { ...actor, externalProps: { ...actor.externalProps, range } };
}
function getRange(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.range);
    return actor.externalProps.range;
}
function getWaypointTarget(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.waypointTarget);
    return actor.externalProps.waypointTarget;
}
function setWaypointTarget(actor, waypointTarget) {
    return { ...actor, externalProps: { ...actor.externalProps, waypointTarget } };
}
function getWaypointNumber(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.waypointNumber);
    return actor.externalProps.waypointNumber;
}
function setWaypointNumber(actor, waypointNumber) {
    return { ...actor, externalProps: { ...actor.externalProps, waypointNumber } };
}
function getWaypointTargetNumber(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.waypointTargetNumber);
    return actor.externalProps.waypointTargetNumber;
}
function setWaypointTargetAndNumber(actor, waypointTarget, waypointTargetNumber) {
    return setWaypointTarget(setWaypointTargetNumber(actor, waypointTargetNumber), waypointTarget);
}
function setWaypointTargetNumber(actor, waypointTargetNumber) {
    return { ...actor, externalProps: { ...actor.externalProps, waypointTargetNumber } };
}
function getSpawnProba(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.spawnProba);
    return actor.externalProps.spawnProba;
}
function setSpawnProba(actor, spawnProba) {
    return { ...actor, externalProps: { ...actor.externalProps, spawnProba } };
}
function setSpreadIgnorancePower(actor, spreadIgnorancePower) {
    return { ...actor, externalProps: { ...actor.externalProps, spreadIgnorancePower } };
}
function getSpreadIgnorancePower(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.spreadIgnorancePower);
    return actor.externalProps.spreadIgnorancePower;
}
function setFaithPoints(actor, faithPoints) {
    return { ...actor, externalProps: { ...actor.externalProps, faithPoints } };
}
function getFaithPoints(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.faithPoints);
    return actor.externalProps.faithPoints;
}
function getMaxFaith(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.maxFaith);
    return actor.externalProps.maxFaith;
}
function setMaxFaith(actor, maxFaith) {
    return { ...actor, externalProps: { ...actor.externalProps, maxFaith } };
}
function setFaithPointsAndMax(actor, faithPoints, maxFaithPoints) {
    return setFaithPoints(setMaxFaith(actor, maxFaithPoints), faithPoints);
}
function getPlayProba(actor) {
    throwErrorIfUndefined(actor.externalProps);
    throwErrorIfUndefined(actor.externalProps.playProba);
    return actor.externalProps.playProba;
}
function setPlayProba(actor, playProba) {
    return { ...actor, externalProps: { ...actor.externalProps, playProba } };
}
export { setConviction, getConviction, setRange, getRange, getWaypointTarget, setWaypointTarget, getWaypointNumber, setWaypointNumber, getWaypointTargetNumber, setWaypointTargetNumber, getSpawnProba, setSpawnProba, setSpreadIgnorancePower, getSpreadIgnorancePower, setFaithPoints, getFaithPoints, getMaxFaith, getPlayProba, setMaxFaith, setWaypointTargetAndNumber, setFaithPointsAndMax, setPlayProba };
//# sourceMappingURL=props.js.map