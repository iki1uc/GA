import { NCLinkFullSync } from "./NCLinkFullSync.js";

export function syncRoom(room) {
  return NCLinkFullSync({
    gate: room.gate,
    ist: room.ist,
    soll: room.soll,
    route: "ODD-GATE-AXIS"
  });
}
