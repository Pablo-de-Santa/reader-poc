# Build Angular app
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Build-time environment selection: development | production
ARG ANGULAR_CONFIGURATION=production
RUN npm run build -- --configuration ${ANGULAR_CONFIGURATION}

# Runtime image
FROM node:20-alpine AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

# Copy browser output produced by Angular build
COPY --from=build /app/dist/reader-poc/browser ./public
COPY server.mjs ./server.mjs

EXPOSE 4000

CMD ["node", "server.mjs"]
