exports.up = function(knex) {
    return knex.schema.createTable('hired_services', function (table){
        table.increments('id')
        table.date('validity_start').notNullable()
        table.date('validity_end').notNullable()
        table.text('comments').nullable()
        table.float('price',2).notNullable()
        table.integer('customer_id').unsigned().references('id').inTable('customers')
        table.integer('service_id').unsigned().references('id').inTable('product_services')
        table.boolean('active').defaultTo(true).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').nullable().defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'))
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('hired_services')
};
