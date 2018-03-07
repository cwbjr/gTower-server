
exports.up = function(knex, Promise) {
  return knex.schema.createTable('origin', (table) => {
    table.increments();
    table.text('race').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('origin');
};
