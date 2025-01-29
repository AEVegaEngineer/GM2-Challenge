import { db } from "./db";

export const setupItems = async () => {
  const exists = await db.schema.hasTable("items");
  if (!exists) {
    await db.schema.createTable("items", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.decimal("price", 10, 2).notNullable();
    });
  }
};
