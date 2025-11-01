// Gemeinsame Utility-Funktionen
// Diese Datei enthält Hilfsfunktionen, die von beiden HTML-Seiten verwendet werden

/**
 * Prüft ob der Benutzer authentifiziert ist
 */
async function checkAuthentication() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/status`, {
            credentials: 'include'
        });
        
        if (response.ok) {
            const data = await response.json();
            return data.authenticated === true;
        }
        return false;
    } catch (error) {
        console.error('Auth check failed:', error);
        return false;
    }
}

/**
 * Zeigt eine Fehlermeldung an
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

/**
 * Versteckt eine Fehlermeldung
 */
function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

/**
 * Validiert eine Query
 */
function validateQuery(query) {
    if (!query || query.trim().length === 0) {
        return { valid: false, error: 'Bitte geben Sie eine Frage ein.' };
    }
    
    if (query.trim().length < 3) {
        return { valid: false, error: 'Die Frage muss mindestens 3 Zeichen lang sein.' };
    }
    
    return { valid: true };
}

