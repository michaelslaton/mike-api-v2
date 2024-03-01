import { Knex } from "knex";

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable("rem_awards", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.string("type").notNullable().defaultTo("belt");
    table.integer("holder").defaultTo(null);
    table
      .foreign("holder")
      .references("id")
      .inTable("rem_employees");
    table.dateTime("date");
    table.string("awardedFor");
    table.boolean("retired").defaultTo(false);
    table.timestamps(true, true);
  });
};

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable("rem_awards");
};