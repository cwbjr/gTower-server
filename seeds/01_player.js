
exports.seed = function(knex, Promise) {
  return knex('player').del()
    .then(function () {
      return knex('player').insert([
        {
          id: 1,
          name: 'Ronin',
          tagline: 'Pain is the bugal call to victory!',
          level: 12,
          profession_id: 5,
          origin_id: 1,
          // class: 'Fighter',
          // race: 'Human',
          image: ''
        },
        {
          id: 2,
          name: 'Zyar',
          tagline: 'Sticks and stones?  Wait till my words seizes the day!',
          level: 10,
          profession_id: 12,
          origin_id: 8,
          // class: 'Wizard',
          // race: 'High Elf',
          image:''
        },
        {
          id: 3,
          name: 'Clunk',
          tagline: 'Nothing more serious than an empty goblet!',
          level: 6,
          profession_id: 1,
          origin_id: 4,
          // class: 'Barbarian',
          // race: 'Dwarf',
          image:''
        }
      ]).then(() => {
      return knex.raw('ALTER SEQUENCE player_id_seq RESTART WITH 4;');
    });
    });
};
