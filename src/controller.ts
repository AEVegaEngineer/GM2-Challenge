// src/controller.ts

import { Request, ResponseToolkit } from "@hapi/hapi";
import * as ItemService from "./service";
import { addEmojiPrefix, combineEmojiPrefixWithName } from "./helpers";

/**
 * Lists all items.
 * 
 * @param {Request} request - The incoming request object.
 * @param {ResponseToolkit} h - The response toolkit.
 * @returns {Promise<ResponseObject>} A promise that resolves to the response object containing all items.
 */
export const listItems = async (request: Request, h: ResponseToolkit) => {
  try {
    const items = await ItemService.getAllItems();
    return items;
  } catch (error) {
    console.error("Error fetching items:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};

/**
 * Retrieves a single item by ID.
 * 
 * @param {Request} request - The incoming request object.
 * @param {ResponseToolkit} h - The response toolkit.
 * @returns {Promise<ResponseObject>} A promise that resolves to the response object containing the requested item.
 */
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

/**
 * Creates a new item with an emoji prefix based on its ID.
 * 
 * @param {Request} request - The incoming request object.
 * @param {ResponseToolkit} h - The response toolkit.
 * @returns {Promise<ResponseObject>} A promise that resolves to the response object containing the created item.
 */
export const createItem = async (request: Request, h: ResponseToolkit) => {
  try {
    const { name, price } = request.payload as { name: string; price: number };

    if (!name || typeof price !== "number") {
      return h.response({ message: "Invalid input" }).code(400);
    }     

    const newItem = await ItemService.createItem({ name, price });
    
    newItem.name = addEmojiPrefix(newItem.name, newItem.id);
    
    const updatedNewItem = await ItemService.updateItem(newItem.id.toString(), { name: newItem.name, price: newItem.price });

    return h.response(updatedNewItem).code(201);
  } catch (error) {
    console.error("Error creating item:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};

/**
 * Updates an existing item, preserving its emoji prefix.
 * 
 * @param {Request} request - The incoming request object.
 * @param {ResponseToolkit} h - The response toolkit.
 * @returns {Promise<ResponseObject>} A promise that resolves to the response object containing the updated item.
 */
export const updateItem = async (request: Request, h: ResponseToolkit) => {
  const id = request.params.id;
  try {
    const { name, price } = request.payload as { name: string; price: number };

    if (!name || typeof price !== "number") {
      return h.response({ message: "Invalid input" }).code(400);
    }

    const currentItem = await ItemService.getItemById(id);
    if (!currentItem) {
      return h.response({ message: "Item not found" }).code(404);
    }

    const updatedName = combineEmojiPrefixWithName(currentItem.name, name);

    const updatedItem = await ItemService.updateItem(id, { name: updatedName, price });
    if (!updatedItem) {
      return h.response({ message: "Item not found" }).code(404);
    }
    return updatedItem;
  } catch (error) {
    console.error("Error updating item:", error);
    return h.response({ message: "Internal server error" }).code(500);
  }
};

/**
 * Deletes an item by ID.
 * 
 * @param {Request} request - The incoming request object.
 * @param {ResponseToolkit} h - The response toolkit.
 * @returns {Promise<ResponseObject>} A promise that resolves to the response object indicating the result of the deletion.
 */
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

/**
 * Wipes all items from the database.
 * 
 * @param {Request} request - The incoming request object.
 * @param {ResponseToolkit} h - The response toolkit.
 * @returns {Promise<ResponseObject>} A promise that resolves to the response object indicating the number of items wiped.
 */
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