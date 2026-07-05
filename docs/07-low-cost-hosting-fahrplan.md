# Low-Cost-Hosting-Fahrplan

Stand: 2026-07-05

## Zielbild

Eine kleine statische Hochzeits-Webseite fuer maximal ca. 100 Gaeste. Keine Datenbank, kein CMS, kein klassischer Server. Hosting soll moeglichst kostenlos bleiben; Kosten entstehen primaer durch die Domain.

## Empfehlung

Primaere Empfehlung:

- Hosting: Cloudflare Pages Free mit Git-Integration.
- Repository: `https://github.com/SMORITZ1/martini-website.git`.
- Domain: `martini-era.de`, registriert bei IONOS.
- DNS: fuer Cloudflare Pages einrichten, bevorzugt ueber Cloudflare-DNS mit Nameserver-Umstellung bei IONOS.
- Kostenrahmen: Hosting voraussichtlich 0 EUR; Domain wenige Euro bis niedriger zweistelliger Betrag pro Jahr, je nach Anbieter und Endung.

Warum Cloudflare Pages:

- Offiziell Free-Plan mit 0 USD, 500 Builds pro Monat, 100 Custom Domains pro Projekt, unbegrenzten statischen Requests und unbegrenzter Bandbreite.
- Fuer sporadischen Traffic von Hochzeitsgaesten mehr als ausreichend.
- Custom Domain und HTTPS passen gut zu einem QR-Code auf Einladungskarten.
- Git-Integration baut und deployed automatisch bei jedem Push.
- Preview Deployments liefern Links zum Anschauen, bevor etwas produktiv wird.
- Keine Serverpflege.

## Alternativen

Netlify Free:

- Ebenfalls passend fuer statische Seiten.
- Gute Bedienung und einfache Domain-Einrichtung.
- Sinnvoll, wenn ihr Netlify bereits kennt oder bevorzugt.

GitHub Pages:

- Technisch kostenlos und sehr minimal.
- Nur empfehlenswert, wenn ein oeffentliches Repository akzeptabel ist oder ein passender GitHub-Plan vorhanden ist.

Vercel Hobby:

- Technisch moeglich.
- Fuer diese Mini-Seite wahrscheinlich mehr Plattform als noetig.
- Gut, falls wir spaeter bewusst Next.js einsetzen wollen.

## Konkreter Fahrplan

1. Hosting-Account festlegen

   Empfehlung: Cloudflare Account fuer Pages plus GitHub- oder GitLab-Repository. Falls ihr schon Netlify bevorzugt oder dort einen Account habt, ist Netlify Free die naechste sinnvolle Option.

2. Git-Integration einrichten

   Repository mit Cloudflare Pages verbinden. Wichtig: Git-Integration von Anfang an auswaehlen, nicht Direct Upload als Standardweg.

3. Erste Preview deployen

   Nach dem ersten Push baut Cloudflare Pages automatisch und stellt eine kostenlose Preview-URL bereit. Damit koennen wir Struktur, Inhalte und Design direkt ansehen.

4. Produktion festlegen

   `main` ist Produktion. Arbeitsstaende laufen ueber Branches oder Pull Requests mit Preview-Link. Erst wenn ein Stand passt, wird er nach `main` uebernommen.

5. Domain in Cloudflare aufnehmen

   `martini-era.de` in Cloudflare als Website/Zone hinzufuegen. Cloudflare zeigt danach zwei Nameserver an.

6. Nameserver bei IONOS umstellen

   In IONOS fuer `martini-era.de` eigene Nameserver verwenden und die zwei Cloudflare-Nameserver eintragen.

7. Custom Domain in Cloudflare Pages verbinden

   In Cloudflare Pages unter Custom domains `martini-era.de` hinzufuegen. DNS-Eintraege und HTTPS abwarten und pruefen. Danach ist die Domain die stabile Zieladresse.

8. QR-Code erst final erzeugen

   QR-Code erst drucken oder in Einladungen einsetzen, wenn die Domain getestet ist. Idealerweise zeigt der QR-Code auf die eigene Domain, nicht auf eine Plattform-URL.

9. Inhaltspflege bis zur Hochzeit

   Inhalte im Code bzw. in einfachen Daten-/Markdown-Dateien pflegen. Bei jeder Aenderung Build und Deployment pruefen.

10. Nach der Hochzeit entscheiden

   Seite weiter online lassen, auf eine Danke-/Foto-Seite umstellen oder Domain nach Ablauf kuendigen.

## Deployment-Workflow

- Lokal entwickeln und kurz pruefen.
- Fuer jede Aufgabe einen `feature/*` Branch erstellen.
- Aenderung committen und auf den Feature Branch pushen.
- Cloudflare Pages erstellt automatisch ein Preview-Deployment.
- Preview-Link gemeinsam anschauen.
- Bei Freigabe nach `main` uebernehmen.
- Cloudflare Pages deployed automatisch die Produktionsseite.
- Custom Domain zeigt auf die Produktionsseite.

## Empfehlung fuer Zugriff

Fuer maximal einfache Nutzung: oeffentliche Seite mit eigener Domain.

Falls ihr die Seite nicht frei auffindbar haben wollt:

- Variante 1: schwer erratbare URL, z. B. `/feier-2027`.
- Variante 2: wenige Details auf der Startseite, genaue Infos in einem Unterbereich.
- Variante 3: Passwortschutz nur, wenn wirklich noetig. Das erhoeht die technische Komplexitaet und kann fuer Gaeste stoeren.

## Was wir nicht buchen sollten

- Shared Hosting nur fuer diese Seite.
- WordPress-Hosting.
- Homepage-Baukasten.
- Datenbankpaket.
- Mailpaket, solange keine eigene Hochzeits-Mailadresse gebraucht wird.
- Analytics- oder Marketing-Add-ons.

## Quellen

- Cloudflare Pages: https://pages.cloudflare.com/
- Cloudflare Pages Custom Domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Cloudflare Pages Git Integration: https://developers.cloudflare.com/pages/get-started/git-integration/
- Cloudflare Pages Preview Deployments: https://developers.cloudflare.com/pages/configuration/preview-deployments/
- Cloudflare Pages Direct Upload: https://developers.cloudflare.com/pages/get-started/direct-upload/
- Cloudflare DNS Full setup: https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/
- IONOS eigene Nameserver: https://www.ionos.com/help/domains/using-your-own-name-servers/using-your-own-name-servers-for-a-domain/
- Cloudflare Registrar: https://www.cloudflare.com/products/registrar/
- GitHub Pages Custom Domains: https://docs.github.com/articles/setting-up-a-custom-domain-with-pages
- Netlify Pricing: https://www.netlify.com/pricing/
- Vercel Pricing: https://vercel.com/pricing
