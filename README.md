# MyAngularProject - Bachelorarbeit

Dieses Projekt wurde im Rahmen meiner Bachelorarbeit erstellt und verwendet den Angular CLI in Version 18.2.10.

## Entwicklungsserver

Führen Sie `ng serve` aus, um einen Entwicklungsserver zu starten. Navigieren Sie zu `http://localhost:4200/`. Die Anwendung wird automatisch neu geladen, wenn Sie eine der Quelldateien ändern.

## Code-Gerüst

Verwenden Sie `ng generate component component-name`, um eine neue Komponente zu generieren. Sie können auch `ng generate directive|pipe|service|class|guard|interface|enum|module` verwenden.

## Build

Führen Sie `ng build` aus, um das Projekt zu erstellen. Die erstellten Dateien werden im `dist/` Verzeichnis gespeichert.

## Unit-Tests ausführen

Führen Sie `ng test` aus, um die Unit-Tests über [Karma](https://karma-runner.github.io) auszuführen.

## End-to-End-Tests ausführen

Führen Sie `ng e2e` aus, um die End-to-End-Tests über eine Plattform Ihrer Wahl durchzuführen. Um diesen Befehl zu verwenden, müssen Sie zunächst ein Paket für End-to-End-Tests installieren.

## Visuelle Regressionstests mit Chromatic

Dieses Projekt verwendet [Chromatic](https://www.chromatic.com/), um visuelle Regressionstests für die UI-Komponenten durchzuführen. Chromatic ermöglicht es, die visuelle Konsistenz der Komponenten sicherzustellen und Änderungen an der Benutzeroberfläche einfach zu überprüfen.

### Chromatic installieren

Um Chromatic zu installieren, führen Sie folgenden Befehl aus:

```bash
npm install --save-dev chromatic

## Storybook mit Chromatic veröffentlichen

Um Storybook auf Chromatic zu veröffentlichen und visuelle Regressionstests durchzuführen, verwenden Sie den folgenden Befehl. **Ersetzen Sie `<project-token>` durch Ihren Chromatic-Projekt-Token** (dieser Token ist in Ihrem Chromatic-Projekt zu finden):

```bash
npx chromatic --project-token=<project-token>

## Automatisierte visuelle Tests

Bei jeder Veröffentlichung überprüft Chromatic automatisch visuelle Änderungen an den UI-Komponenten und erstellt eine Übersicht der Unterschiede. Dies hilft, unbeabsichtigte visuelle Veränderungen zu identifizieren und die Qualität des UI-Designs zu gewährleisten.

## Weitere Hilfe

Für weitere Hilfe zur Angular CLI verwenden Sie ng help oder besuchen Sie die Angular CLI Dokumentation.