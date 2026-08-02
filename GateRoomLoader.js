/* ⭐ GateRoomLoader.js — Perfekt angepasst für ALLXALL 2268 */

export async function loadAllRooms(){

    async function loadRoom(name){
        try {
            const file = `./${name}.room`;
            const res = await fetch(file);

            if(!res.ok){
                throw new Error(`Room-Datei fehlt oder ist beschädigt: ${file}`);
            }

            const data = await res.json();

            // Validierung
            if(!data.name || !data.axes || !data.meta || !data.room){
                throw new Error(`Room-Struktur fehlerhaft: ${file}`);
            }

            return data;

        } catch(err){
            console.error("ROOM-LOAD-ERROR:", err);
            return null;
        }
    }

    // ⭐ 3×756 Rooms laden
    const meKI = await loadRoom("meKI");
    const GA   = await loadRoom("GA");
    const MIE  = await loadRoom("MIE");

    // ⭐ Diagnose
    if(!meKI || !GA || !MIE){
        alert("FEHLER: 3×756 Rooms konnten nicht geladen werden.\nBenötigt: meKI.room, GA.room, MIE.room");
    } else {
        console.log("ALLXALL · 2268 Rooms geladen.");
    }

    return { meKI, GA, MIE };
}
