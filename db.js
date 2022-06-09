
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "qoveryadmin",
    host: "zdb1a7152-postgresql.z10146392.xms.sh",
    database: "calldb",
    password: "gsXfa1IhtLLn0qWYJWtGG9-oCrtchdbx",
    port: 5432,
});

module.exports = pool;
