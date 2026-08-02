import { WLOCH } from "./WLOCH/WLOCH.js";

export function stabiliseRoom(room) {
  return WLOCH.stabilise({
    gate: room.gate,
    ist: room.ist,
    soll: room.soll,
    axis: "ODD-GATE-AXIS"
  });
}
