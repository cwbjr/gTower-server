
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
          image: 'https://wiki.guildwars2.com/images/thumb/1/1a/Pit_Fighter_armor_human_male_front.jpg/193px-Pit_Fighter_armor_human_male_front.jpg'
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
          image:'http://moziru.com/images/drawn-elf-elf-wizard-14.jpg'
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
          image:'https://s-media-cache-ak0.pinimg.com/originals/81/c8/2f/81c82fed7d1aed6e271788957723504c.jpg'
        }
      ]).then(() => {
      return knex.raw('ALTER SEQUENCE player_id_seq RESTART WITH 4;');
    });
    });
};
