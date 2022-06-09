
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "calldb",
    password: "ytrewqytrewq",
    port: 5432,
});

module.exports = pool;
