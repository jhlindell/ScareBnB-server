const knex = require('../knex');

function getProperties(id){
  let query = knex('properties')
    .select();

    if(id){
      query.where('id', id);
    }

    return query;
}

module.exports = {
  getProperties
};
