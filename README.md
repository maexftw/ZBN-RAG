# IFBS RAG-System - Web Interface

Web-Interface für das lokale IFBS RAG-System (Retrieval-Augmented Generation).

## 🚀 Live-Demo

Nach Aktivierung von GitHub Pages erreichbar unter:
**https://maexftw.github.io/ZBN-RAG/**

## 📋 Voraussetzungen

1. **Backend läuft lokal** auf deinem Rechner (Port 5000)
2. **SSH-Tunnel oder Ngrok** für Remote-Zugriff eingerichtet
3. **GitHub Pages aktiviert** (siehe unten)

## ⚙️ GitHub Pages aktivieren

1. Gehe zu: https://github.com/maexftw/ZBN-RAG/settings/pages
2. Unter "Source":
   - Wähle "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
3. Klicke "Save"

Die Seite ist dann unter `https://maexftw.github.io/ZBN-RAG/` erreichbar.

## 🔧 Konfiguration

### API-Endpoint konfigurieren

Bearbeite `config.js` und passe die URL an:

**Für lokale Tests:**
```javascript
const API_BASE_URL = 'http://localhost:5000';
```

**Für SSH-Tunnel:**
```javascript
const API_BASE_URL = 'http://localhost:8080';
```

**Für Ngrok:**
```javascript
const API_BASE_URL = 'https://deine-ngrok-url.ngrok.io';
```

Nach Änderung:
```bash
git add config.js
git commit -m "Update API endpoint"
git push
```

## 🔐 Login

- **Username:** `admin`
- **Passwort:** `admin123`

*(Passwort kann im Backend geändert werden)*

## 📱 Nutzung

1. Öffne die GitHub Pages URL
2. Logge dich ein
3. Stelle Fragen zu IFBS-Richtlinien, DIN-Normen und Fachgutachten
4. Das System durchsucht die indexierten Dokumente und gibt präzise Antworten

## 🛠️ Entwicklung

### Lokal testen

```bash
cd web
python -m http.server 8000
```

Dann öffne: `http://localhost:8000`

### Änderungen hochladen

```bash
git add .
git commit -m "Beschreibung der Änderung"
git push
```

GitHub Pages aktualisiert sich automatisch (kann 1-2 Minuten dauern).

## 📚 Weitere Informationen

- Backend-Dokumentation: Siehe `rag_system/DEPLOYMENT.md`
- Setup-Anleitung: Siehe `GITHUB_SETUP.md`

## 🔒 Sicherheit

- Alle Daten bleiben lokal auf deinem Rechner
- Keine Cloud-Dienste verwendet
- Authentifizierung erforderlich für API-Zugriff

## 📝 Dateien

- `index.html` - Hauptseite mit Query-Interface
- `login.html` - Login-Seite
- `styles.css` - Styling
- `app.js` - Utility-Funktionen
- `config.js` - API-Konfiguration

---

**Entwickelt für ZBN - Lokales RAG-System**
