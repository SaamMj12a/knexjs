
module.exports= {
    local:{   // ojo puede llamarse como sea
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: ' root',
        password: 'password',
        database: 'appknex'
    },
    pool:{
        min: 2,
        max: 10,
    },
    migrations:{
        directory:  `${process.cwd()}/knex/migrations`
    },
    seeds: {
        directory: `${process.cwd()}/knex/seeds`
    } 
  }
}