FROM node:24-alpine

ENV NODE_ENV=production
WORKDIR /app

# Сначала только зависимости: этот слой пересобирается, лишь когда меняется package.json
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

COPY --chown=node:node . .

USER node
EXPOSE 3000
CMD ["node", "./bin/www"]
