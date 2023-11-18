import { Knex } from "knex";

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable("rem_notifications", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("type").notNullable();
    table.integer("user").notNullable();
    table.string("message").defaultTo(null);
    table.timestamps(true, true);
  });
};

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable("rem_notifications");
};