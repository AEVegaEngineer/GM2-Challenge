import knex from "knex";

export const db = knex({
  client: "pg",
  connection: {
    host: "db",
    user: "postgres",
    password: "654321",
    database: "items_db",
  },
});
