export function syncRoom(room) {
  return NCLinkFullSync({
    gate: room.gate,
    ist: room.ist,
    soll: room.soll,
    route: "GA-meKI-MIE-PULSE"
  });
}
