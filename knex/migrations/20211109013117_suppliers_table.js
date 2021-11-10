
exports.up = function(knex) {
    return knex.schema.createTable('suppliers', function (table) {
        table.increments('id')
        table.string('supplier_name',45).notNullable()
        table.string('email',100).nullable()
        table.string('phone',10).notNullable()
        table.boolean('active').defaultTo(true).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').nullable().defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'))
    })
  }

exports.down = function(knex) {
  return knex.schema.dropTable('suppliers')
};
