import { db } from './db';

interface Item {
  id: number;
  name: string;
  price: number;
}

const parseItem = (item: any): Item => ({
  ...item,
  price: parseFloat(item.price)
});

export const getAllItems = async (): Promise<Item[]> => {
  const items = await db('items').select('*');
  return items.map(parseItem);
};

export const getItemById = async (id: string): Promise<Item | undefined> => {
  const item = await db('items').where('id', id).first();
  return item ? parseItem(item) : undefined;
};

export const createItem = async (item: { name: string; price: number }): Promise<Item> => {
  const [newItem] = await db('items').insert(item).returning('*');
  return parseItem(newItem);
};

export const updateItem = async (id: string, item: { name: string; price: number }): Promise<Item | undefined> => {
  const [updatedItem] = await db('items').where('id', id).update(item).returning('*');
  return updatedItem ? parseItem(updatedItem) : undefined;
};

export const deleteItemById = async (id: string): Promise<number> => {
  return await db('items').where('id', id).del();
};

export const wipeAllItems = async (): Promise<number> => {
  return await db('items').del();
};