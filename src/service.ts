import { db } from './db';

export const getItemById = async (id: string) => {
  return await db('items').where('id', id).first();
};

export const createItem = async (item: { name: string; price: number }) => {
  const [newItem] = await db('items').insert(item).returning('*');
  return newItem;
};