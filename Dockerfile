# Build stage
FROM node:18.17.1-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the application code to the container
COPY . .

ENV NODE_ENV='production'
# Build the application
RUN npm run build

# Use an official Nginx runtime as a parent image
FROM nginx:1.21.3-alpine

# Copy the build output from the previous stage to the Nginx document root
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]