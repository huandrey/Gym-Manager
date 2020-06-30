const { Pool } = require('pg');

module.exports = new Pool ({
    user: 'postgres',
    password: 202820,
    host: 'localhost',
    port: 5432,
    database: "gymmanager"
})
 
