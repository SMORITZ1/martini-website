# Arbeitsregeln fuer Codex

Projektverzeichnis: `C:\DEV\Webseite\martini-website`

Dieses Projekt ist eine kleine Hochzeits-Webseite fuer Gaeste. Die Seite soll ueber QR-Code erreichbar sein und Informationen zur Hochzeit bereitstellen.

Oberste Arbeitsregel: pragmatisch bleiben, nichts unnoetig gross machen und nur die Dinge bearbeiten, die fuer den aktuellen Auftrag relevant sind.

## Zusammenarbeit

- Arbeite ab sofort ausschliesslich im Projektverzeichnis `C:\DEV\Webseite\martini-website`.
- Verwende GitHub Flow: `main` bleibt stabil, neue Arbeit laeuft in `feature/*` Branches.
- Keine direkten Feature-Commits auf `main`.
- Feature Branches werden per Pull Request reviewed und erst nach Freigabe gemerged.
- Halte die technische Basis klein: kein CMS, kein Backend, keine Datenbank, solange nicht explizit gewuenscht.
- Baue zuerst einfache, sichtbare Ergebnisse, die ueber Cloudflare Pages direkt pruefbar sind.

## Deployment

- Hosting-Ziel: Cloudflare Pages mit GitHub-Integration.
- Repository: `https://github.com/SMORITZ1/martini-website.git`
- Domain: `martini-era.de`, registriert bei IONOS.
- Produktionsbranch: `main`.
- Feature Branches oder Pull Requests dienen als Preview.
- Aktuelle Pages-URL: `https://martini-website.pages.dev/`.
- Cloudflare-Zone fuer `martini-era.de` ist angelegt, Custom Domain wartet auf IONOS-Nameserver-Wechsel.
- Ziel-Nameserver bei IONOS: `bradley.ns.cloudflare.com` und `peaches.ns.cloudflare.com`.

## Technische Leitplanken

- Static-first.
- Responsive Darstellung auf Smartphone und Rechner.
- Inhalte und Darstellung einfach trennen, aber keine unnoetige Architektur einfuehren.
- Externe Services nur einbinden, wenn sie fuer den aktuellen Schritt gebraucht werden.

## Designreferenz

- Primaere Referenz ist der Entwurf der Einladungskarte.
- Visuelle Richtung: cremefarbener Papierlook, feine goldene Linien, Sage-/Olive-Gruen, elegante Serifentypografie, Martini-/Oliven-Motiv, florale Akzente.
- Details sind in `docs/design-reference.md` dokumentiert.
