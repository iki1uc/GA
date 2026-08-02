export async function loadRoom(name) {
  const response = await fetch(`./${name}.room`);
  return await response.json();
}

export async function loadAllRooms() {
  const rooms = ["alpha", "beta", "gamma", "delta", "epsilon", "zeta"];
  const data = {};

  for (const r of rooms) {
    data[r] = await loadRoom(r);
  }

  return data;
}
