const connection = require('./connection');

module.exports = {
  getAll() {
    return connection('origin');
  },
  getOne(id) {
    return connection('origin')
      .where('id', id)
      .first();
  },
  create(origin) {
    return connection('origin')
      .insert(origin, 'id')
      .then(ids => {
        return ids[0];
      });
  },
  update(id, origin) {
    return connection('origin')
      .where('id', id)
      .update(origin);
  },
  delete(id) {
    return connection('origin')
      .where('id', id)
      .del();
  }
};
