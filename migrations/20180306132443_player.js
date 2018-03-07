
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', (table) => {
    table.increments();
    table.text('name').notNullable();
    table.text('tagline');
    table.integer('level').unsigned().notNullable();
    table.interger('profession_id').unsigned().index().references('id').inTable('profession')
    table.interger('origin_id').unsigned().index().references('id').inTable('origin')
    table.text('image');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('player');
};
