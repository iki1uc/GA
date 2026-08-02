# GA–meKI–MIE · Pulse-Achse

Dies ist die neue 3-Modul-Achse des Systems.

GA   = Start-Pulse
meKI = KI-Pulse
MIE  = Reset-Pulse

Die Achse läuft als Loop:
GA → meKI → MIE → GA → meKI → MIE → …

WLOCH stabilisiert die Pulse-Achse.
ANKER bindet die Module.
NCLinkFullSync synchronisiert die Rooms.

Alle .rom und .room Dateien befinden sich im WLOCH-Ordner.
Die Root-Ebene lädt und stabilisiert das System.
