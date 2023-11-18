import { Knex } from "knex";

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable("rem_ranks", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.integer("rank").notNullable();
    table.string("color").defaultTo("#ffa500");
    table.timestamps(true, true);
  });
};

export async function downn (knex: Knex): Promise<void> {
  return knex.schema.dropTable("rem_ranks");
};