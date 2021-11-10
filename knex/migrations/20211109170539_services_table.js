
exports.up = function(knex) {
    // "string"
    // 'string'
    // "s" -> string
    // 's' -> string
    // some -> variable/constant
    return knex.schema.createTable('product_services', function (table){ 
        table.increments('id')
        table.string('service_name',250).notNullable()
        table.float('cost',2).notNullable()
        table.float('price',2).nullable()
        table.integer('supplier_id').unsigned().references('id').inTable('suppliers')
        table.boolean('active').defaultTo(true).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').nullable().defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'))
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('product_services')
  };
