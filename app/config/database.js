const knex = require('knex');

module.exports = knex({
    client: 'pg',
    connection: 'postgres://postgres:electronica99@localhost:5432/mibanco',
    pool: { min: 1, max: 2 },
    cquireConnectionTimeout: 5000,
});