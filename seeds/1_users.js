
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
        },
        {
          first_name: 'Jordan',
          last_name: 'Klaers',
          username: 'ScaryBoy',
          email: 'sneakySnuk@gmail.com',
          phone_number: '303-555-5555',
          is_host: true,
          street_address: '100 street road',
          city: 'Boulder',
          state: 'CO',
          zip_code: '80303',
          photo_url: null
        },
        {
          first_name: 'Jon',
          last_name: 'Lindell',
          username: 'BaconMan',
          email: 'IFeedYouBacon@gmail.com',
          phone_number: '303-578-0000',
          is_host: true,
          street_address: '760 rover road',
          city: 'Boulder',
          state: 'CO',
          zip_code: '80303',
          photo_url: null
        }
      ]);
    })
    .then(function(){
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    })
};
