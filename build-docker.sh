#!/bin/bash

# Set variables
IMAGE_NAME="show-me-the-money-backend"

# Build the Docker image
echo "Building Docker image..."
docker build -t $IMAGE_NAME .

echo "Docker build completed..."