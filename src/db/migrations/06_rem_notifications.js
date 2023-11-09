exports.up = function (knex) {
  return knex.schema.createTable("rem_notifications", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("type").notNullable();
    table.integer("user").notNullable();
    table.string("message").defaultTo(null);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_notifications");
};