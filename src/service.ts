import { db } from './db';

export const getItemById = async (id: string) => {
  return await db('items').where('id', id).first();
};