import { Request, ResponseToolkit } from '@hapi/hapi';
import * as ItemService from './service';

export const getItem = async (request: Request, h: ResponseToolkit) => {
  const id = request.params.id;
  try {
    const item = await ItemService.getItemById(id);
    if (!item) {
      return h.response({ message: 'Item not found' }).code(404);
    }
    return item;
  } catch (error) {
    console.error('Error fetching item:', error);
    return h.response({ message: 'Internal server error' }).code(500);
  }
};

export const createItem = async (request: Request, h: ResponseToolkit) => {
  try {
    const { name, price } = request.payload as { name: string; price: number };
    
    if (!name || typeof price !== 'number') {
      return h.response({ message: 'Invalid input' }).code(400);
    }

    const newItem = await ItemService.createItem({ name, price });
    return h.response(newItem).code(201);
  } catch (error) {
    console.error('Error creating item:', error);
    return h.response({ message: 'Internal server error' }).code(500);
  }
};