export const WLOCH = {
    axis: "GA-meKI-MIE-PULSE",

    stabilise(room){
        return {
            gate: room.gate,
            ist: room.ist,
            soll: room.soll,
            pulse: this.nextPulse(room.ist),
            anchor: room.anchor,
            ok: true
        };
    },

    nextPulse(ist){
        if(ist === 1) return 2;   // GA → meKI
        if(ist === 2) return 3;   // meKI → MIE
        if(ist === 3) return 1;   // MIE → GA
        return 1;
    }
};
