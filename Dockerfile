# syntax=docker/dockerfile:1.4

# Build stage
FROM node:22-alpine AS build

# Create app directory
WORKDIR /app

# Set environment variables
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Copy package files and install ALL dependencies (including devDependencies)
COPY package*.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm pkg delete scripts.prepare && \
    npm ci

# Copy source code
COPY . .

# Build the application & create swagger docs
RUN npm run build && \
    npm run swagger:generate

# Remove dev dependencies and npmrc file
RUN npm prune --production && \
    rm -f .npmrc

# Production stage
FROM node:22-alpine AS production

# Set environment to production
ENV NODE_ENV=production

WORKDIR /app

# Copy package files and install only production dependencies
# Copy production app from build stage
COPY --from=build /app/package.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

# Add non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Expose the port the app runs on
EXPOSE 3000

# Use ENTRYPOINT to set the base command
ENTRYPOINT ["node", "dist/server.js"]

# Default command (can be overridden)
CMD []
