export async function loadAllRooms() {
  const rooms = ["GA", "meKI", "MIE"];
  const data = {};

  for (const r of rooms) {
    data[r] = await loadRoom(`${r}.room`);
  }

  return data;
}
