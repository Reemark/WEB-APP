const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const logFile = '/app/logs/app.log';

// Créer le dossier logs si inexistant
if (!fs.existsSync('/app/logs')) fs.mkdirSync('/app/logs');

// Middleware pour logs simples
app.use((req, res, next) => {
    const logLine = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
    fs.appendFileSync(logFile, logLine);
    next();
});

// Servir le dossier public
app.use(express.static('public'));

// Route health
app.get('/health', (req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
