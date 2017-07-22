
exports.seed = function(knex, Promise) {

  return knex('users').del()
    .then(function () {

      return knex('users').insert([
        {
          first_name: 'Sol',
          last_name: 'Lauden',
          username: 'hummusman',
          email: 'donkeyrider89@gmail.com',
          phone_number: '303-515-1234',
          is_host: true,
          street_address: '1729 Nutscaping View',
          city: 'Boulder',
          state: 'CO',
          zip_code: '80301',
          photo_url: null
        }
      ]);
    })
    .then(function(){
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    })
};
