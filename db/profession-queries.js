const connection = require('./connection');

module.exports = {
  getAll() {
    return connection('profession');
  },
  getOne(id) {
    return connection('profession')
      .where('id', id)
      .first();
  },
  create(character) {
    return connection('profession')
      .insert(character, 'id')
      .then(ids => {
        return ids[0];
      });
  },
  update(id, character) {
    return connection('profession')
      .where('id', id)
      .update(character);
  },
  delete(id) {
    return connection('profession')
      .where('id', id)
      .del();
  }
};
