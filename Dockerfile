FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (better layer caching)
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci --no-audit --no-fund

# Copy sources and build
COPY . .
RUN npm run build

# 2) Runtime stage (Nginx to serve static files)
FROM nginx:1.27-alpine AS runner


COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy built artifacts
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Healthcheck (simple TCP check on port 80)
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
