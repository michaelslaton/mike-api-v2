exports.up = function (knex) {
  return knex.schema.createTable("rem_ranks", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.string("name").notNullable();
    table.integer("rank").notNullable();
    table.string("color").defaultTo("#ffa500");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_ranks");
};