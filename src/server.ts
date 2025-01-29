import Hapi from "@hapi/hapi";
import { defineRoutes } from "./routes";
import { setupItems } from "./model";

const getServer = () => {
  const server = Hapi.server({
    host: "localhost",
    port: 3000,
  });

  defineRoutes(server);

  return server;
};

export const initializeServer = async () => {
  const server = getServer();
  await setupItems();
  await server.initialize();
  return server;
};

export const startServer = async () => {
  const server = getServer();
  await setupItems();
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
  return server;
};
