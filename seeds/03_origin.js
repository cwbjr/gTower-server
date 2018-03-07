
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('origin').del()
    .then(function () {
      // Inserts seed entries
      return knex('origin').insert([
        {
          id: 1,
          race: 'Human'
        },
        {
          id: 2,
          race: 'Gnome'
        },
        {
          id: 3,
          race: 'Halfling'
        },
        {
          id: 4,
          race: 'Dwarf'
        },
        {
          id: 5,
          race: 'Drow'
        },
        {
          id: 6,
          race: 'Dragonborn'
        },
        {
          id: 7,
          race: 'Tiefling'
        },
        {
          id: 8,
          race: 'Elf'
        }
      ]).then(() => {
      return knex.raw('ALTER SEQUENCE origin_id_seq RESTART WITH 9;');
    });
  });
};
