# Microservice kitchen

This microservice is in charge of handling requests, assignment and delivery of dishes, with the condition that to deliver the dish you must wait for the delivery of the ingredients from the food warehouse.

- Node version: `v20.16.0`
- Npm version: `10.8.1`

## Enviroment variables

```
PORT=8080

MONGO_URL=mongodb://localhost:27017
MONGO_DB_NAME=images_cats

JWT_SECRET_KEY=jwtSecretKey
JWT_EXPIRE_IN=1h

API_CAT_URL=https://api.thecatapi.com/v1
API_CAT_TOKEN=API_CAT_TOKEN
```

## Run app as develop mode

After setting the environment variables, navigate to the `api` directory and run the following command

```
npm run dev
```

## Run app as production mode

After setting the environment variables, navigate to the `api` directory and run the following command

```
npm run build && npm run serve
```
