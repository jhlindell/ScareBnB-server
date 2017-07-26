
exports.up = function(knex, Promise) {
  return knex.schema.createTable("properties", (table) => {
    table.increments("id");
    table.integer("owner_id").references("id").inTable("users").onDelete("cascade").notNullable();
    table.string("property_name").notNullable();
    table.string("street_address").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.integer("zip_code").notNullable();
    table.string("photo_url").notNullable();
    table.string("description").notNullable();
    table.string("amenities").notNullable();
    table.float("nightly_price").notNullable();
    table.string("house_rules").notNullable();
    table.boolean("bookedOnHalloween").notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("properties");
};
