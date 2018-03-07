const connect = require('./connection');

module.exports = {
  getAll() {
    return connect('player');
  },
  getOne(id) {
    return connect('player')
      .where('id', id)
      .first();
  },
  create(player) {
    return connect('player')
      .insert(player, 'id')
      .then(ids => {
        return ids[0];
      });
  },
  update(id, player) {
    return connect('player')
      .where('id', id)
      .update(player);
  },
  delete(id) {
    return connect('player')
      .where('id', id)
      .del();
  }
};
