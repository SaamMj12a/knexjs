const environment = process.env.environment || ' local'
//variable de ambiente para poder conectarse de manera correcta a la bd
const config = require('../knexfile.js')[environment]
module.exports = require('knex')(config)