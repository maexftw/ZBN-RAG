// API Konfiguration
// Diese Datei muss angepasst werden, um auf deinen lokalen Server zu zeigen
// Bei SSH-Tunnel: Verwende die Tunnel-URL (z.B. http://localhost:8080)
// Bei direkter Verbindung: Verwende deine lokale IP (z.B. http://192.168.1.100:5000)

// STANDARD: localhost (für lokale Tests)
// FÜR SSH-TUNNEL: Ändere zu deiner Tunnel-URL
// FÜR GITHUB PAGES: Ändere zu deiner öffentlichen URL (z.B. ngrok, Cloudflare Tunnel)
// Für lokale Tests (einfachste Lösung)
// const API_BASE_URL = 'http://localhost:5000';

// Für GitHub Pages: Aktuelle LocalTunnel-URL
const API_BASE_URL = 'https://tough-corners-roll.loca.lt';

// Beispiel-Konfigurationen:
// SSH-Tunnel (Port 8080): const API_BASE_URL = 'http://localhost:8080';
// Öffentliche IP: const API_BASE_URL = 'http://192.168.1.100:5000';
// Ngrok: const API_BASE_URL = 'https://abc123.ngrok.io';

