# POC

## Monorepo

### NPM Workspaces

#### Pros
- Sehr simple
- Einfache JS-Snippets können gut geshared werden
- Für kleine Projekte, wo die Abhängigkeiten und ihre Reihenfolge bekannt sind, ausreichend.

#### Cons
- Voraussetzung ist mind. **NPM 7**
- Muss selbst konfiguriert werden
- Erkennt zwar Abhängigkeiten, aber nicht deren notwendigen Reihenfolge beim *builden*.
- React-Komponenten können nicht so einfach geshared werden, Konfiguration notwendig.
- Bietet keinen weiteren Funktionalitäten, wie Dependency-Graph

### Lerna
- Open-Source-Tool
- Package-Managed Monorepo
- Kümmert sich hauptsächlich um die Paketverwaltung und gemeinsame Nutzung von Code zwischen Paketen.

#### Pros
- Versionierung
  - Kann ausgeben, welche Pakete sich seit der letzten Version geändert haben
- Publishing
- Dependency-Management
- Changelog-Erstellung
- Published nur Pakete die sich geändert haben
- Erkennt Abhängigkeiten beim Bauen und setzt diese in eine richtige Reihenfolge

#### Cons

### Nx
- Open-Source-Toolkit
- Funktionen:
  - Code-Generierung
  - Testautomatisierung
  - Build- und Publishoptionen

#### Pros
#### Cons

### [Turborepo](https://turbo.build/repo)
Schwerpunkt liegt hier nicht auf das Verwaltung oder entwickeln von Monorepos, sondern den verbesserten und beschleunigen des *Buildsystems*


## JS-Frameworks
### Next.js
### Remix
### Viet
