exports.up = function (knex) {
  return knex.schema.createTable("rem_belts", (table) => {
    table.increments("id").primary().unsigned().unique();
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("rem_belts");
};