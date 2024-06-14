#!/bin/bash

# Set variables
IMAGE_EXTERNAL_NAME="jaypeng2015/show-me-the-money"
IMAGE_EXTERNAL_CONTAINER_NAME="show-me-the-money"
EXTERNAL_HOST_PORT=3003
EXTERNAL_CONTAINER_PORT=3000

# Check if a container with the same name is already running
if [ "$(docker ps -q -f name=$IMAGE_EXTERNAL_CONTAINER_NAME)" ]; then
    echo "Stopping existing jaypeng2015/show-me-the-money container..."
    docker stop $IMAGE_EXTERNAL_CONTAINER_NAME
fi

# Remove the existing container if it exists
if [ "$(docker ps -aq -f status=exited -f name=$IMAGE_EXTERNAL_CONTAINER_NAME)" ]; then
    echo "Removing existing jaypeng2015/show-me-the-money container..."
    docker rm $IMAGE_EXTERNAL_CONTAINER_NAME
fi

# Run the Docker container
echo "Running Docker container..."
docker run -d -p $EXTERNAL_HOST_PORT:$EXTERNAL_CONTAINER_PORT --name $IMAGE_EXTERNAL_CONTAINER_NAME $IMAGE_EXTERNAL_NAME

echo "Docker jaypeng2015/show-me-the-money container is running at http://localhost:$EXTERNAL_HOST_PORT"


IMAGE_NAME="show-me-the-money-backend"
CONTAINER_NAME="show-me-the-money-backend"
HOST_PORT=3001
CONTAINER_PORT=3001

# Check if a container with the same name is already running
if [ "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
    echo "Stopping existing container..."
    docker stop $CONTAINER_NAME
fi

# Remove the existing container if it exists
if [ "$(docker ps -aq -f status=exited -f name=$CONTAINER_NAME)" ]; then
    echo "Removing existing container..."
    docker rm $CONTAINER_NAME
fi

# Run the Docker container
echo "Running Docker container..."
docker run -d -p $HOST_PORT:$CONTAINER_PORT --name $CONTAINER_NAME $IMAGE_NAME

echo "Docker container is running at http://localhost:$HOST_PORT"
