
exports.up = (knex, Promise) => Promise.all([
  knex.schema.createTable('restaurants', (table) => {
    table.integer('id').primary();
    table.string('name', 140);
    table.integer('seats');
  }),

  knex.schema.createTable('reservations', (table) => {
    table.increments('id').primary();
    table.integer('restaurantid')
      .notNullable()
      .references('id')
      .inTable('restaurants')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    table.date('date');
    table.integer('time');
    table.string('name', 140);
    table.integer('party');
    table.date('timestamp').defaultTo(knex.fn.now());
  }),
]);


exports.down = knex => knex.schema.dropTable('reservations')
  .then(() => knex.schema.dropTable('restaurants'));
