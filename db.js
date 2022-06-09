
const Pool = require("pg").Pool;
const pool = new Pool({
    user: "qchfsstd",
    host: "postgres://qchfsstd:jM8LZJRsdCtSjkV3rVXEM4T8as9yVOgJ@abul.db.elephantsql.com/qchfsstd",
    database: "qchfsstd",
    password: "jM8LZJRsdCtSjkV3rVXEM4T8as9yVOgJ",
    port: 5432,
});

module.exports = pool;
