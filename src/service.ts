import { db } from './db';

export const getAllItems = async () => {
  return await db('items').select('*');
};

export const getItemById = async (id: string) => {
  return await db('items').where('id', id).first();
};

export const createItem = async (item: { name: string; price: number }) => {
  const [newItem] = await db('items').insert(item).returning('*');
  return newItem;
};

export const updateItem = async (id: string, item: { name: string; price: number }) => {
  const [updatedItem] = await db('items').where('id', id).update(item).returning('*');
  return updatedItem;
};

export const deleteItemById = async (id: string) => {
  return await db('items').where('id', id).del();
};