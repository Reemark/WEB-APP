# Utiliser Node.js Alpine léger
FROM node:24-alpine

# Répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances et installer
COPY package*.json ./
RUN npm install

# Copier le reste du code
COPY . .

# Créer le dossier logs pour persistance
RUN mkdir -p /app/logs

# Exposer le port
EXPOSE 3000

# Démarrer l'application
CMD ["node", "app.js"]
