FROM node:20-alpine
WORKDIR /srv
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY server.js ./
COPY app/ ./app/
EXPOSE 8080
CMD ["node", "server.js"]
