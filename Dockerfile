FROM node:18.12-slim as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY package*.json ./
COPY index.js ./
COPY public/ ./public/
COPY views/ ./views/
RUN npm ci

COPY --chown=node:node . .
RUN npm install

# ---

FROM node:18-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/ ./

CMD ["node", "index.js"]
