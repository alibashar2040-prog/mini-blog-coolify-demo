# Use Node.js 18 as base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app source
COPY . .

# Create necessary directories
RUN mkdir -p api

# Expose port
EXPOSE 8080

# Start command
CMD [ "node", "api/index.js" ]