import { Server } from '@hapi/hapi';
import { db } from './db';

export const defineRoutes = (server: Server) => {
  server.route({
    method: 'GET',
    path: '/ping',
    handler: async (request, h) => {
      return { ok: true };
    }
  });

  server.route({
    method: 'GET',
    path: '/items/{id}',
    handler: async (request, h) => {
      const id = request.params.id;
      try {
        const item = await db('items').where('id', id).first();
        if (!item) {
          return h.response({ message: 'Item not found' }).code(404);
        }
        return item;
      } catch (error) {
        console.error('Error fetching item:', error);
        return h.response({ message: 'Internal server error' }).code(500);
      }
    }
  });
};