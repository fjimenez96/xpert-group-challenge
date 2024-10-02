import { Server } from "./presenters/server";
import { MongoDB } from "./config/mongo";

async function connectToMongoDB(): Promise<void> {
  const mongoUrl: string = process.env.MONGO_URL || "mongodb://localhost:27017";
  const dbName: string = process.env.MONGO_DB_NAME || "images_cats";

  return MongoDB.connect(mongoUrl, dbName);
}

async function init() {
  const port = process.env.PORT || 8080;
  const server = new Server(+port);
  await server.start();

  connectToMongoDB()
    .then(() => {
      console.log("MongoDB connection OK !!");
    })
    .catch((error) => {
      console.error(error);
    });
}

init();
