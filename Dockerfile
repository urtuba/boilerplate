# Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
# Skip husky installation in Docker
RUN npm pkg delete scripts.prepare && npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine AS production

# Set environment to production
ENV NODE_ENV=production

WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
# Skip husky installation in Docker and use --omit=dev instead of --only=production
RUN npm pkg delete scripts.prepare && npm ci --omit=dev

# Copy built application from build stage
COPY --from=build /app/dist ./dist

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/server.js"] 