
const Pool = require("pg").Pool;

const connectionString = "postgres://qchfsstd:jM8LZJRsdCtSjkV3rVXEM4T8as9yVOgJ@abul.db.elephantsql.com/qchfsstd";

const pool = new Pool({
    connectionString,
});

module.exports = pool;
