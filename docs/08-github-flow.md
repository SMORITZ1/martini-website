# GitHub Flow

## Grundsatz

`main` bleibt die stabile Codebase. Neue Arbeit passiert in Feature Branches und wird erst nach Review/Freigabe nach `main` uebernommen.

## Branches

- Format: `feature/<kurzer-name>`
- Beispiele:
  - `feature/project-setup`
  - `feature/hero-section`
  - `feature/agenda-faq`
  - `feature/cloudflare-deploy`

## Workflow

1. Aktuellen Stand von `main` holen.
2. Feature Branch erstellen.
3. Aenderung klein und nachvollziehbar umsetzen.
4. Lokal pruefen.
5. Committen und Feature Branch pushen.
6. Pull Request gegen `main` erstellen.
7. Preview-Link pruefen.
8. Nach Freigabe mergen.

## Deployment

- Feature Branch oder Pull Request: Cloudflare Pages Preview.
- `main`: stabiler Produktionsstand.
- Custom Domain `martini-era.de`: zeigt spaeter auf Produktion.

## Lokale Git-Befehle

```powershell
git checkout main
git pull
git checkout -b feature/project-setup
git status
git add .
git commit -m "Initial project setup"
git push -u origin feature/project-setup
```
