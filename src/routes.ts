import { Server } from "@hapi/hapi";
import * as ItemController from "./controller";

export const defineRoutes = (server: Server) => {
  server.route({
    method: "GET",
    path: "/ping",
    handler: async (request, h) => {
      return { ok: true };
    },
  });

  server.route({
    method: "GET",
    path: "/items",
    handler: ItemController.listItems,
  });

  server.route({
    method: "GET",
    path: "/items/{id}",
    handler: ItemController.getItem,
  });

  server.route({
    method: "POST",
    path: "/items",
    handler: ItemController.createItem,
  });
};
