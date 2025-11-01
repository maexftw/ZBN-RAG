# GitHub Pages Setup - Schritt für Schritt

## Vorbereitung

1. Stelle sicher, dass das Backend läuft: `python api/server.py`
2. Backend läuft auf Port 5000 (lokal)

## Schritt 1: GitHub Repository erstellen

1. Gehe zu https://github.com
2. Klicke auf "New repository" (oder das + Symbol)
3. Repository Name: z.B. `zbn-rag-ui` oder `rag-system-ui`
4. Beschreibung: "RAG-System Web Interface"
5. Public oder Private (deine Wahl)
6. **WICHTIG:** Lasse alle Checkboxen leer (kein README, keine .gitignore, keine License)
7. Klicke "Create repository"

## Schritt 2: Frontend zu GitHub hochladen

Öffne PowerShell im `web` Ordner:

```powershell
cd "I:\Ai Claude\ZBN\rag_system\web"

# Git initialisieren
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit - RAG UI"

# GitHub Repository hinzufügen (ersetze USERNAME und REPO-NAME!)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# Main Branch erstellen
git branch -M main

# Hochladen
git push -u origin main
```

**Beispiel:**
```powershell
git remote add origin https://github.com/maexF/zbn-rag-ui.git
```

## Schritt 3: GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf "Settings" (oben rechts)
3. Scrolle zu "Pages" (links im Menü)
4. Unter "Source":
   - Wähle "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
5. Klicke "Save"

GitHub zeigt dir dann die URL: `https://USERNAME.github.io/REPO-NAME/`

## Schritt 4: Remote-Zugriff einrichten

Du hast zwei Optionen:

### Option A: SSH-Tunnel (für dauerhafte Lösung)

**Auf deinem Rechner:**
1. SSH-Server aktivieren (einmalig):
```powershell
# Als Administrator
Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0
Start-Service sshd
Set-Service -Name sshd -StartupType 'Automatic'
```

2. Deine IP-Adresse herausfinden:
```powershell
ipconfig
# Suche nach "IPv4-Adresse" (z.B. 192.168.1.100)
```

**Kunde startet Tunnel:**
```bash
ssh -L 8080:localhost:5000 dein-username@deine-ip
```

**Frontend konfigurieren:**
In `web/config.js` ändern:
```javascript
const API_BASE_URL = 'http://localhost:8080';
```

Dann commit und push:
```powershell
git add config.js
git commit -m "Configure for SSH tunnel"
git push
```

### Option B: Ngrok (einfacher, schnell)

**Ngrok installieren:**
1. Download: https://ngrok.com/download
2. Installieren

**Ngrok starten:**
```powershell
# Während Backend läuft
ngrok http 5000
```

Ngrok zeigt eine URL wie: `https://abc123.ngrok.io`

**Frontend konfigurieren:**
In `web/config.js` ändern:
```javascript
const API_BASE_URL = 'https://abc123.ngrok.io';
```

Dann commit und push:
```powershell
git add config.js
git commit -m "Configure for ngrok"
git push
```

**Wichtig:** Bei jedem Neustart von Ngrok ändert sich die URL (kann mit kostenlosem Account gefixt werden).

## Schritt 5: Testen

1. Öffne deine GitHub Pages URL: `https://USERNAME.github.io/REPO-NAME/`
2. Login mit:
   - Username: `admin`
   - Passwort: `admin123`
3. Stelle eine Test-Frage: "Welche Richtlinien gelten für Fassaden?"

## Troubleshooting

### Problem: "Verbindungsfehler"
- Prüfe ob Backend läuft: `http://localhost:5000/api/health`
- Prüfe `config.js` - ist die URL korrekt?
- Prüfe SSH-Tunnel oder Ngrok - läuft es noch?

### Problem: "Nicht authentifiziert"
- Cookies aktiviert?
- Versuche neu einzuloggen

### Problem: GitHub Pages zeigt alte Version
- Warte 1-2 Minuten (GitHub braucht Zeit zum Deployen)
- Hard Refresh: Strg+F5

## Zusammenfassung Checkliste

- [ ] GitHub Repository erstellt
- [ ] Frontend hochgeladen (`git push`)
- [ ] GitHub Pages aktiviert
- [ ] Backend läuft (`python api/server.py`)
- [ ] SSH-Tunnel oder Ngrok eingerichtet
- [ ] `config.js` mit korrekter URL aktualisiert
- [ ] Frontend aktualisiert (`git push`)
- [ ] Getestet!

Viel Erfolg! 🚀

