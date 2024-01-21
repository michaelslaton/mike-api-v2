import { Knex } from "knex";

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable("rem_projects", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.integer("host").notNullable();
    table
      .foreign("host")
      .references("id")
      .inTable("rem_employees");
    table.dateTime("date");
    table.string("type").notNullable();
    table.string("description").notNullable();
    table.boolean("status").notNullable().defaultTo(true);
    table.boolean("locked").notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable("rem_projects");
};