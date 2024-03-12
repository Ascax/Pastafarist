/**
 * Constructor for a phase
 * @param funcName The name of the phase
 * @param executePhase The function that computes the new actor array according to the results of the phase from all the actors
 * @returns A new phase
 */
function createPhase(funcName, executePhase) {
    return { funcName: funcName, executePhase: executePhase };
}
export { createPhase };
//# sourceMappingURL=phase.js.map