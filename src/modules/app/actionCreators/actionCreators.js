import { UPDATE_COUNTER, CHANGE_STEP_SIZE } from "./constants";

export const updateCounter = value => ({
    type: UPDATE_COUNTER,
    payload: value,
});

export const changeStepSize = value => ({
    type: CHANGE_STEP_SIZE,
    payload: value,
});