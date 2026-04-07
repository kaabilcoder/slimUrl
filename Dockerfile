# --- STAGE 1: BUILD (Compiles TypeScript to JavaScript) ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build
RUN npm run build

# Copy views into dist so runtime can find them relative to dist
RUN cp -r src/views dist/views || true

# --- STAGE 2: PRODUCTION (Runs the compiled JavaScript) ---
FROM node:20-alpine AS final
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --only=production

# Install curl for health check
RUN apk add --no-cache curl

# Copy compiled output (including dist/views now)
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/views ./src/views
COPY --from=builder /app/package.json ./package.json

ENV PORT=8000
EXPOSE ${PORT}

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:8000 || exit 1

CMD [ "node", "dist/index.js" ]

