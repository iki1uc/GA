export async function loadAllRooms(){
  const meKI = await fetch("./meKI.room").then(r=>r.json());
  const GA   = await fetch("./GA.room").then(r=>r.json());
  const MIE  = await fetch("./MIE.room").then(r=>r.json());

  return { meKI, GA, MIE };
}
