# Martini Era

Kleine Hochzeits-Webseite fuer `martini-era.de`.

Aktueller Stand: minimale Coming-soon-Seite fuer das erste Cloudflare-Pages-Deployment.

## Design

Die visuelle Richtung orientiert sich am Einladungskartenentwurf: Creme, Gold, Olive/Sage, elegante Serifentypografie und Martini-Motiv.

- [Designreferenz](docs/design-reference.md)

## Deployment

- Hosting: Cloudflare Pages
- Repository: `https://github.com/SMORITZ1/martini-website.git`
- Produktionsbranch: `main`
- Arbeitsbranches: `feature/*`
- Domain: `martini-era.de`
- Live Preview: `https://martini-website.pages.dev/`
- Cloudflare Custom Domain: vorbereitet, wartet auf Nameserver-Wechsel bei IONOS

## Cloudflare Pages Build Settings

Fuer die aktuelle statische Version:

- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `/`
- Root directory: leer lassen

## Domain Setup

Cloudflare-Zone fuer `martini-era.de` ist angelegt. Bei IONOS muessen die Nameserver auf Cloudflare umgestellt werden:

- `bradley.ns.cloudflare.com`
- `peaches.ns.cloudflare.com`

Aktuelle IONOS-Nameserver, die ersetzt werden sollen:

- `ns1029.ui-dns.com`
- `ns1036.ui-dns.biz`
- `ns1047.ui-dns.org`
- `ns1117.ui-dns.de`
