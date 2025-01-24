# Use a lightweight base image for Node.js
FROM node:14-alpine AS base

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json for better layer caching
COPY package*.json ./

# Install dependencies (including dev dependencies if required for build)
RUN npm install --production=false

# Remove any cached or unnecessary data
RUN npm prune --production

# Copy the rest of the application files
COPY . .

# Set NODE_ENV for production optimizations
ENV NODE_ENV=production

# Expose the application port (adjust if your backend runs on a different port)
EXPOSE 5002

# Start the application
CMD ["npm", "start"]