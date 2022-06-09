
const router = require("express").Router();
const db = require("../db.js");

router.post("/send", async (req, res, next) => {

    const { name, sender, text } = req.body;

    const user = await db.query("SELECT * FROM users WHERE userName = $1", [name]);

    if (!user.rows.length) {
        res.json({ error: "Адресат не найден" });
        next();
        return;
    }

    const currentDate = new Date().toLocaleString();

    const message = db.query(
        "INSERT INTO messages (name, text, date, user_id) VALUES ($1, $2, $3, $4)", 
        [sender, text, currentDate, user.rows[0].id]
    );

    res.json({ status: "OK" });

    next();

})

module.exports = router;