# Build Stage
FROM node:14-alpine AS builder

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Production Stage
FROM nginx:alpine AS production

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]