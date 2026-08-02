export function buildGateFromRooms(rooms) {
  const gate = {};

  for (const key in rooms) {
    const r = rooms[key];
    gate[r.gate] = {
      ist: r.ist,
      soll: r.soll,
      bedeutung: r.bedeutung
    };
  }

  return gate;
}
