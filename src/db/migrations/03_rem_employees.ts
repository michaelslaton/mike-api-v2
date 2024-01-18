import { Knex } from "knex";

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable("rem_employees", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.dateTime("birthday").defaultTo(null);
    table.string("uid").notNullable();
    table.integer("rank").unsigned().notNullable().defaultTo(5);
    table
      .foreign("rank")
      .references("id")
      .inTable("rem_ranks");
    table.boolean("admin").notNullable().defaultTo(false);
    table.string("description");
    table.boolean("locked").notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable("rem_employees");
};