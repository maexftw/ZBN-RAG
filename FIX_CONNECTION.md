# 🔧 Verbindungsfehler beheben

## Problem: "Failed to fetch"

**Ursache:** GitHub Pages kann `localhost` nicht erreichen!

## Lösung in 3 Schritten:

### Schritt 1: Backend starten

Öffne PowerShell:

```powershell
cd "I:\Ai Claude\ZBN\rag_system"
.\venv\Scripts\Activate.ps1
python api/server.py
```

Backend läuft dann auf `http://localhost:5000`

**Lasse dieses Fenster offen!**

---

### Schritt 2: Ngrok starten

Öffne ein **neues** PowerShell-Fenster:

```powershell
ngrok http 5000
```

Ngrok zeigt eine URL wie:
```
Forwarding   https://abc123.ngrok.io -> http://localhost:5000
```

**Kopiere die HTTPS-URL** (z.B. `https://abc123.ngrok.io`)

**Wichtig:** Lasse auch Ngrok laufen!

---

### Schritt 3: Frontend konfigurieren

1. Öffne `rag_system/web/config.js`
2. Ändere die URL:

```javascript
const API_BASE_URL = 'https://abc123.ngrok.io';  // Deine Ngrok-URL hier!
```

3. Hochladen:

```powershell
cd "I:\Ai Claude\ZBN\rag_system\web"
git add config.js
git commit -m "Fix: Use ngrok URL for GitHub Pages"
git push
```

4. Warte 1-2 Minuten (GitHub Pages braucht Zeit zum Update)

---

### Schritt 4: Testen

1. Öffne: https://maexftw.github.io/ZBN-RAG/
2. Hard Refresh: Strg+F5 (für neue Version)
3. Login: `admin` / `admin123`
4. Stelle eine Frage

## ✅ Checkliste

- [ ] Backend läuft (`python api/server.py`)
- [ ] Ngrok läuft (`ngrok http 5000`)
- [ ] Ngrok-URL kopiert
- [ ] `config.js` mit Ngrok-URL aktualisiert
- [ ] Änderungen gepusht (`git push`)
- [ ] 1-2 Minuten gewartet
- [ ] Hard Refresh gemacht (Strg+F5)
- [ ] Getestet!

## 🆘 Alternative: Lokal testen

Falls du lokal testen willst (ohne GitHub Pages):

1. Öffne `rag_system/web/index.html` direkt im Browser
2. Oder starte lokalen Server:
```powershell
cd "I:\Ai Claude\ZBN\rag_system\web"
python -m http.server 8000
```
3. Öffne: `http://localhost:8000`
4. `config.js` kann bei `http://localhost:5000` bleiben

---

**Das sollte das Problem lösen! 🚀**

