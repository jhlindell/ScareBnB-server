
exports.seed = function(knex, Promise) {
  return knex('properties').del()
    .then(function () {
      return knex('properties').insert([
        {
          owner_id: 1,
          property_name: 'Haunted Hummus House',
          street_address: '1789 Nutscaping View',
          city: 'Boulder',
          state: 'CO',
          zip_code: 80301,
          photo_url: '',
          description: 'This place is haunted as fuck. The ghosts here will scare the falafel out of you. Book here if you got the stones.',
          amenities: 'running water and power',
          nightly_price: 29.99,
          house_rules: 'Keep the noise down.'
        }
      ]);
    })
    .then(function(){
      return knex.raw("SELECT setval('properties_id_seq', (SELECT MAX(id) FROM properties))");
    });
};
