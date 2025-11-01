# IFBS RAG-System - Web Frontend

Dieses Frontend ermöglicht den Zugriff auf das lokale RAG-System über einen Browser.

## Setup für GitHub Pages

1. Dieses Verzeichnis (`web/`) als GitHub Repository hochladen
2. GitHub Pages aktivieren (Settings > Pages)
3. `config.js` anpassen mit deiner API-URL

## Lokale Entwicklung

```bash
# In diesem Verzeichnis
python -m http.server 8000

# Dann öffne: http://localhost:8000
```

## Konfiguration

Passe `config.js` an:

```javascript
const API_BASE_URL = 'http://localhost:5000';  // Lokal
// oder
const API_BASE_URL = 'http://localhost:8080';  // SSH-Tunnel
// oder
const API_BASE_URL = 'https://dein-tunnel.ngrok.io';  // Ngrok
```

## Dateien

- `login.html` - Login-Seite
- `index.html` - Hauptseite mit Query-Interface
- `styles.css` - Styling
- `app.js` - Utility-Funktionen
- `config.js` - API-Konfiguration

## Browser-Kompatibilität

- Chrome/Edge (empfohlen)
- Firefox
- Safari
- Mobile Browser (iOS Safari, Chrome Mobile)

