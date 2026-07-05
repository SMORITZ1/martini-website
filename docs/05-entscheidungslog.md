# Entscheidungslog

Dieses Log haelt technische und organisatorische Entscheidungen fest. Statuswerte: Vorgeschlagen, Entschieden, Verworfen, Ersetzt.

## D-001: Static-first Architektur

- Status: Vorgeschlagen
- Kontext: Die Seite ist primaer content-orientiert und benoetigt initial keine Datenbank.
- Entscheidungsvorschlag: Statische oder statisch gerenderte Webseite mit einfacher Inhaltsstruktur.
- Konsequenz: Niedrige Betriebskosten, einfache Wartung, gute Performance. Kein CMS und keine generische Erweiterungsarchitektur.

## D-006: Simplicity-first statt CMS

- Status: Entschieden
- Kontext: Die Webseite ist fuer eine einzelne Hochzeit mit ueberschaubarem Content gedacht.
- Entscheidung: Es wird kein CMS, Headless-CMS oder Enterprise-Setup eingeplant.
- Konsequenz: Inhalte werden so abgelegt, dass sie leicht angepasst werden koennen, aber ohne unnoetige Plattformschicht.

## D-007: Pragmatismus als Hauptregel

- Status: Entschieden
- Kontext: Das Projekt ist privat, klein und klar umrissen.
- Entscheidung: Codex soll nicht zu viel hineininterpretieren und primaer die konkret angefragten Dinge pragmatisch umsetzen.
- Konsequenz: Rechtliche, Datenschutz- oder Bildthemen werden nicht proaktiv ausgebaut, sondern nur knapp erwaehnt, wenn sie fuer eine konkrete Entscheidung wirklich relevant sind.

## D-008: GitHub Flow

- Status: Entschieden
- Kontext: Das Projekt wird in einem GitHub-Repository entwickelt.
- Entscheidung: `main` bleibt stabil. Neue Arbeit laeuft in `feature/*` Branches und wird per Pull Request nach `main` gebracht.
- Konsequenz: Cloudflare Pages kann Feature Branches/PRs als Preview deployen und `main` als Produktionsstand verwenden.

## D-009: GitHub Repository

- Status: Entschieden
- Kontext: Das Repository wurde fuer die Entwicklung bereitgestellt.
- Entscheidung: `https://github.com/SMORITZ1/martini-website.git` ist das GitHub-Remote.
- Konsequenz: Lokaler Remote `origin` zeigt auf dieses Repository; Entwicklung laeuft nach GitHub Flow.

## D-002: Hosting-Auswahl

- Status: Vorgeschlagen
- Kontext: Die Seite soll dauerhaft ueber QR-Code erreichbar sein.
- Entscheidungsvorschlag: Cloudflare Pages Free mit Git-Integration fuer Hosting; Netlify Free als einfache Alternative.
- Begruendung: Fuer ca. 100 sporadische Gaeste reicht statisches Free-Hosting aus. Ein klassisches Webhosting-Paket ist nicht noetig. Git-Integration liefert automatische Deployments und Review-Links.
- Entscheidung benoetigt: GitHub/GitLab-Repository und Cloudflare-Pages-Projektanbindung.

## D-003: Domain

- Status: Entschieden
- Kontext: Der QR-Code sollte auf eine stabile Domain oder Weiterleitungs-URL zeigen.
- Entscheidung: `martini-era.de` wurde bei IONOS registriert.
- Konsequenz: Domain bleibt bei IONOS registriert; DNS soll fuer Cloudflare Pages eingerichtet werden.

## D-004: Oeffentlichkeit und Zugriff

- Status: Offen
- Kontext: Die Seite soll ueber QR-Code erreichbar sein.
- Optionen: Oeffentlich, schwer erratbare URL, Passwortschutz, private Preview bis kurz vor Versand.
- Entscheidung benoetigt: Gewuenschter Komfort fuer Gaeste.

## D-005: Externe Karten

- Status: Vorgeschlagen
- Kontext: Gaeste brauchen eine Route zum Ort.
- Entscheidungsvorschlag: Zunaechst Google Maps als normaler Link statt eingebetteter Karte.
- Konsequenz: Einfach, robust und datenschutzfreundlicher als ein Embed. Einbettung kann spaeter bewusst entschieden werden.

## D-010: Designrichtung Vorschlag 1

- Status: Vorgeschlagen
- Kontext: Nach mehreren visuellen Iterationen gefaellt eine Mischung aus klassischer Einladung und moderner Glasoptik besser als ein hartes, kartenlastiges Layout.
- Entscheidungsvorschlag: Vorschlag 1 wird als primaere Richtung umgesetzt: rechte vertikale Glas-Timeline, grosser editorialer Hero, Portraitzeichnung ohne harten Rahmen, Countdown als schwebende Glas-Karte und einzelne Eckdaten-Pills.
- Konsequenz: Die Seite wirkt moderner und naeher am Martini-Motto, bleibt aber durch reduzierte Hintergrundmuster ruhiger als das reine Mockup.
