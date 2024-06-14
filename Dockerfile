FROM node:20.11.1-alpine as base

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

ENV PORT=3001 \
    HOST='0.0.0.0' \
    EXTERNAL_API_URL=http://host.docker.internal:3003/api.xro/2.0

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Define the command to run the app
CMD ["npm", "start"]
