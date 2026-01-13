# Web App Docker

## Construire l'image
docker build -t ready7/web-app:1.0 .

## Lancer le conteneur avec Docker
docker run -d --name web-app -p 8081:3000 ready7/web-app:1.0

## Tester
Ouvrir http://localhost:8081
Vérifier http://localhost:8081/health

## Avec Docker Compose
docker-compose up -d
docker-compose logs -f

## Supprimer conteneur et image
docker stop web-app
docker rm web-app
docker image rm ready7/web-app:1.0

## Pousser sur Docker Hub
docker login
docker tag ready7/web-app:1.0 ready7/web-app:1.0
docker push ready7/web-app:1.0
