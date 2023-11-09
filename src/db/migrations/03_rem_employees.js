exports.up = function (knex) {
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
    table.boolean("status").notNullable().defaultTo(true);
    table.boolean("locked").notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_employees");
};