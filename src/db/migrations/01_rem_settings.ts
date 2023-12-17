import { Knex } from "knex";

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable("rem_settings", (table: Knex.TableBuilder) => {
    table.increments("id").primary().unsigned().unique();
    table.string("motd").defaultTo(null);
    table.timestamps(true, true);
  });
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable("rem_settings");
};