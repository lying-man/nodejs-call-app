
const router = require("express").Router();
const db = require("../db.js");

router.delete("/delete", async (req, res, next) => {
    const id = req.body.id;
    const response = await db.query("DELETE FROM messages WHERE id = $1", [id]);
    next();
})

module.exports = router;