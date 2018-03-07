
exports.seed = function(knex, Promise) {
  return knex('profession').del()
    .then(function () {
      return knex('profession').insert([
        {
          id: 1,
          class: 'Barbarian',
          avatar: 'barbarian'
        },
        {
          id: 2,
          class: 'Bard',
          avatar: 'bard'
        },
        {
          id: 3,
          class: 'Cleric',
          avatar: 'cleric'
        },
        {
          id: 4,
          class: 'Druid',
          avatar: 'druid'
        },
        {
          id: 5,
          class: 'Fighter',
          avatar: 'fighter'
        },
        {
          id: 6,
          class: 'Monk',
          avatar: 'monk'
        },
        {
          id: 7,
          class: 'Paladin',
          avatar: 'paladin'
        },
        {
          id: 8,
          class: 'Ranger',
          avatar: 'ranger'
        },
        {
          id: 9,
          class: 'Rogue',
          avatar: 'rogue'
        },
        {
          id: 10,
          class: 'Sorcerer',
          avatar: 'sorcerer'
        },
        {
          id: 11,
          class: 'Warlock',
          avatar: 'warlock'
        },
        {
          id: 12,
          class: 'Wizard',
          avatar: 'wizard'
        }
      ]).then(() => {
      return knex.raw('ALTER SEQUENCE profession_id_seq RESTART WITH 13;');
    });
    });
};
