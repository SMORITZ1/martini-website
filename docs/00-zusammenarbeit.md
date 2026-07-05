# Zusammenarbeit

## Ziel

Wir entwickeln die Hochzeits-Webseite iterativ. Der erste Schwerpunkt ist die technische und organisatorische Grundlage. Danach entstehen Inhalte, Struktur, Design und einzelne Komponenten in kurzen Review-Zyklen.

## Rollen

- Sebastian liefert Kontext, Inhalte, Designvorgaben, Domain-/Budgetentscheidungen und finale Freigaben.
- Codex fuehrt die technische Struktur pragmatisch, macht nur relevante Vorschlaege, implementiert kleine Inkremente und verifiziert Aenderungen.

## Arbeitsmodus

1. Anforderungen aufnehmen und offene Punkte sichtbar machen.
2. Nur bei Bedarf Loesungsoptionen mit Vor- und Nachteilen vorschlagen.
3. Eine kleine Entscheidung oder Komponente festlegen.
4. Umsetzen und lokal pruefen.
5. Ergebnis gemeinsam ansehen und anpassen.
6. Entscheidung oder Erkenntnis dokumentieren.

## Branching

- Wir verwenden GitHub Flow.
- `main` ist die stabile Codebase.
- Neue Arbeit passiert in `feature/*` Branches.
- Pull Requests dienen fuer Review, Preview und Freigabe.
- Merge nach `main` triggert spaeter das Produktions-Deployment.

## Entscheidungsregeln

Codex darf konservative technische Defaults vorschlagen, aber nicht allein final entscheiden bei:

- Domainname, Registrar, Hostingkosten oder Vertragsbindung.
- Oeffentlichkeit der Seite, Passwortschutz oder Zugriffsbeschraenkung.
- Finalem visuellen Stil, Bildsprache und Tonalitaet.
- Features, die ein Backend, Uploads, Formulare oder Datenspeicherung benoetigen.

## Definition of Ready

Ein Umsetzungsschritt ist bereit, wenn Folgendes klar ist:

- Ziel und Zielgruppe des Abschnitts.
- Benoetigte Inhalte oder akzeptierte Platzhalter.
- Sichtbare Zustaende und Interaktionen.
- Offene Designvorgaben oder bewusst neutraler Zwischenstil.

## Definition of Done

Ein Umsetzungsschritt ist abgeschlossen, wenn:

- Der Code laeuft und der normale Build erfolgreich ist.
- Die Komponente auf Mobile und Desktop sinnvoll funktioniert.
- Inhalte nicht hart mit dem finalen Design verkoppelt sind.
- Offene Annahmen dokumentiert sind.
- Der naechste konkrete Review-Punkt benannt ist.
