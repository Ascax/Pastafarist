import type { Actor } from "./actor";
import type { Vector2D } from "./utils/geometry";
/**
 * This file contains:
 * - getters to get the content of the externalProps field of the given actor of type {@link Actor}
 * - setters to set the externalProps of the given actor to the given value
 */
declare function setConviction(actor: Actor, conviction: number): Actor;
declare function getConviction(actor: Actor): number;
declare function setRange(actor: Actor, range: number): Actor;
declare function getRange(actor: Actor): number;
declare function getWaypointTarget(actor: Actor): Vector2D;
declare function setWaypointTarget(actor: Actor, waypointTarget: Vector2D): Actor;
declare function getWaypointNumber(actor: Actor): number;
declare function setWaypointNumber(actor: Actor, waypointNumber: number): Actor;
declare function getWaypointTargetNumber(actor: Actor): number;
declare function setWaypointTargetAndNumber(actor: Actor, waypointTarget: Vector2D, waypointTargetNumber: number): Actor;
declare function setWaypointTargetNumber(actor: Actor, waypointTargetNumber: number): Actor;
declare function getSpawnProba(actor: Actor): number;
declare function setSpawnProba(actor: Actor, spawnProba: number): Actor;
declare function setSpreadIgnorancePower(actor: Actor, spreadIgnorancePower: number): Actor;
declare function getSpreadIgnorancePower(actor: Actor): number;
declare function setFaithPoints(actor: Actor, faithPoints: number): Actor;
declare function getFaithPoints(actor: Actor): number;
declare function getMaxFaith(actor: Actor): number;
declare function setMaxFaith(actor: Actor, maxFaith: number): Actor;
declare function setFaithPointsAndMax(actor: Actor, faithPoints: number, maxFaithPoints: number): Actor;
declare function getPlayProba(actor: Actor): number;
declare function setPlayProba(actor: Actor, playProba: number): Actor;
export { setConviction, getConviction, setRange, getRange, getWaypointTarget, setWaypointTarget, getWaypointNumber, setWaypointNumber, getWaypointTargetNumber, setWaypointTargetNumber, getSpawnProba, setSpawnProba, setSpreadIgnorancePower, getSpreadIgnorancePower, setFaithPoints, getFaithPoints, getMaxFaith, getPlayProba, setMaxFaith, setWaypointTargetAndNumber, setFaithPointsAndMax, setPlayProba };
