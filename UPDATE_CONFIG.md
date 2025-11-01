# Config.js aktualisieren

## Sobald du die Tunnel-URL hast:

1. Öffne `rag_system/web/config.js`
2. Ändere die Zeile:

```javascript
const API_BASE_URL = 'https://DEINE-TUNNEL-URL';
```

3. Dann:
```powershell
cd "I:\Ai Claude\ZBN\rag_system\web"
git add config.js
git commit -m "Configure API endpoint"
git push
```

4. Warte 1-2 Minuten und teste: https://maexftw.github.io/ZBN-RAG/

---

## Oder ich mache es für dich:

**Sage mir einfach die URL** (z.B. `https://abc123.loca.lt` oder `https://xyz.ngrok-free.app`) und ich aktualisiere alles automatisch!

