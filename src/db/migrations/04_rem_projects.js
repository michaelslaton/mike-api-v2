exports.up = function (knex) {
  return knex.schema.createTable("rem_projects", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.integer("host").notNullable();
    table
      .foreign("host")
      .references("id")
      .inTable("rem_employees");
    table.string("type").notNullable();
    table.string("description").notNullable();
    table.boolean("status").notNullable().defaultTo(true);
    table.boolean("locked").notNullable().defaultTo(false);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_projects");
};