FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install && npm install -g nodemon

EXPOSE 3000

CMD ["nodemon","-L", "server.js"]