
exports.up = function(knex) {
    return knex.schema.createTable('billing_information', function (table){
        table.increments('id')
        table.string('rfc',13).unique()
        table.string('business_name',250).notNullable()
        table.string('interior_number',45).nullable()
        table.string('outdoor_number',45).nullable()
        table.string('suburb',100).nullable()
        table.string('municipality',100).nullable()
        table.string('state',45).nullable()
        table.string('country',45).nullable()
        table.integer('customer_id').unsigned().references('id').inTable('customers')
        table.boolean('active').defaultTo(true).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').nullable().defaultTo(knex.raw('NULL ON UPDATE CURRENT_TIMESTAMP'))
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('billing_information')
};
