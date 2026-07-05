# Arbeitsregeln fuer Codex

Dieses Projekt ist eine Hochzeits-Webseite fuer Gaeste. Die Seite soll ueber QR-Code erreichbar sein und Informationen wie Tagesablauf, FAQ, Orte, Geschenkhinweise und Beziehungsgeschichte bereitstellen.

Oberste Arbeitsregel: pragmatisch bleiben, nichts unnoetig gross machen und nur die Dinge bearbeiten, die fuer den aktuellen Auftrag relevant sind.

## Zusammenarbeit

- Fuehre das Projekt in kleinen Iterationen: Plan, Design, Bildkonzept, Umsetzung, Review, Deployment.
- Stelle Rueckfragen nur, wenn eine Entscheidung fuer den naechsten Schritt wirklich noetig ist.
- Dokumentiere Annahmen, offene Fragen und Entscheidungen in `docs/`.
- Zeige bei UI-Arbeit zuerst kleine, besprechbare Bausteine statt eine grosse Komplettloesung.
- Halte Inhalte und Darstellung getrennt, damit ein neues Design spaeter ohne grosse Strukturmigration integriert werden kann.

## Technische Leitplanken

- Simplicity-first: Es ist eine kleine Hochzeits-Webseite, kein Enterprise-Produkt.
- Static-first: keine serverseitige Komponente und keine Datenbank, solange kein klares Feature sie benoetigt.
- Deployment-Komfort ist ein wichtiges Auswahlkriterium: Ergebnisse sollen mit wenig Aufwand live pruefbar sein.
- Kein CMS, kein Headless-CMS und keine generische Content-Plattform, solange die Inhalte ueberschaubar bleiben.
- Inhalte sollen nur so stark strukturiert werden, wie es fuer leichte Anpassbarkeit und Verstaendlichkeit nuetzlich ist.
- JSON, TypeScript-Datenmodule oder Markdown/MDX sind nur Werkzeuge, keine Architekturvorgabe.
- Externe Services wie Google Maps so einfach wie moeglich einbinden, meistens als normaler Link.
- Kein Tracking, keine Cookies und keine Formularverarbeitung, solange sie nicht gewuenscht sind.
- Responsive Umsetzung fuer Smartphone und Rechner; Mobile ist wichtig wegen QR-Code, Desktop muss trotzdem vollwertig und sauber nutzbar sein.
- Barrierearme Basis: semantisches HTML, gute Kontraste, Tastaturbedienbarkeit und reduzierte Motion respektieren.
- Design-Integration ueber Tokens, Theme-Variablen und austauschbare Komponenten vorbereiten.

## Review- und Delivery-Regeln

- GitHub Flow verwenden: `main` bleibt stabil, neue Arbeit laeuft in `feature/*` Branches.
- Keine direkten Feature-Commits auf `main`.
- Feature Branches werden per Pull Request reviewed und erst nach Freigabe gemerged.
- Vor jeder groesseren Umsetzung die betroffenen Anforderungen und offenen Entscheidungen pruefen.
- Fuer jede sichtbare Komponente: Zweck, Inhalt, Zustand und spaetere Design-Anpassbarkeit beachten.
- Vor einem Deployment einen lokalen Build ausfuehren und das Ergebnis dokumentieren.
- Produktions-Deployments erst nach expliziter Freigabe oder nach gemeinsamer Festlegung des Deployment-Prozesses.
