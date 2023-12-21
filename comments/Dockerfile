FROM node:alpine
LABEL authors="dinh"

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]