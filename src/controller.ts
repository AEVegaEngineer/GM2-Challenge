import { Request, ResponseToolkit } from "@hapi/hapi";
import * as ItemService from "./service";

export const listItems = async (request: Request, h: ResponseToolkit) => {
  try {
    const items = await ItemService.getAllItems();
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};

export const getItem = async (request: Request, h: ResponseToolkit) => {
  const id = request.params.id;
  try {
    const item = await ItemService.getItemById(id);
    if (!item) {
      return h.response({ message: "Item not found" }).code(404);
    }
    return item;
  } catch (error) {
    console.error("Error fetching item:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};

export const createItem = async (request: Request, h: ResponseToolkit) => {
  try {
    const { name, price } = request.payload as { name: string; price: number };

    if (!name || typeof price !== "number") {
      return h.response({ message: "Invalid input" }).code(400);
    }

    const newItem = await ItemService.createItem({ name, price });
    return h.response(newItem).code(201);
  } catch (error) {
    console.error("Error creating item:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};

export const updateItem = async (request: Request, h: ResponseToolkit) => {
  const id = request.params.id;
  try {
    const { name, price } = request.payload as { name: string; price: number };

    if (!name || typeof price !== "number") {
      return h.response({ message: "Invalid input" }).code(400);
    }

    const updatedItem = await ItemService.updateItem(id, { name, price });
    if (!updatedItem) {
      return h.response({ message: "Item not found" }).code(404);
    }
    return updatedItem;
  } catch (error) {
    console.error("Error updating item:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};

export const deleteItem = async (request: Request, h: ResponseToolkit) => {
  const id = request.params.id;
  try {
    const deletedCount = await ItemService.deleteItemById(id);
    if (deletedCount === 0) {
      return h.response({ message: "Item not found" }).code(404);
    }
    return h.response().code(204);
  } catch (error) {
    console.error("Error deleting item:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};

export const wipeItems = async (request: Request, h: ResponseToolkit) => {
  try {
    const deletedCount = await ItemService.wipeAllItems();
    return h
      .response({ message: `Wiped ${deletedCount} items from the database` })
      .code(200);
  } catch (error) {
    console.error("Error wiping items:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};
