# Getting Started with the Show Me The Money Backend

This app can be run in two ways:

## Nodejs Express Server

This app depends on an external service to fetch remote data.

Make sure to run the docker image before moving forward with this option.

`docker run -d -p 3003:3000 --name show-me-the-money jaypeng2015/show-me-the-money`

## create an `.env` file with below contents

`EXTERNAL_API_URL=http://localhost:3003/api.xro/2.0` \
`PORT=3001`

### `npm run dev`

Runs the app in the development mode.\
`curl http://localhost:3001/api/v1/ping` to ensure server is working.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `dist` folder.\
This step is required before running the app in Production mode with `npm start`

### `npm start`

Runs the app in the production mode.\
`curl http://localhost:3001/api/v1/ping` to ensure server is working.

## Container Application

Run the below two commands to run this app as docker container.

In the root directory of the project

`./build-docker.sh`
`./run-docker.sh`

Runs the app in the production mode.\
`curl http://localhost:3001/api/v1/ping` to ensure server is working.
