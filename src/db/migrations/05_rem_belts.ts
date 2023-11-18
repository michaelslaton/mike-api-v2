import { Knex } from "knex";

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable("rem_belts", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.timestamps(true, true);
  });
};

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable("rem_belts");
};