
const router = require("express").Router();
const db = require("../db.js");

router.get("/messages", async (req, res, next) => {

    const { name, mode } = req.query;

    const userId = await db.query("SELECT id FROM users WHERE userName = $1", [name]);
    const messages = await db.query("SELECT * FROM messages WHERE user_id = $1", [userId.rows[0].id]);

    const list = messages.rows;

    if (mode === "new") {
        list.sort( (a, b) => new Date(b.date) - new Date(a.date) );
        res.json(list);
        return;
    }

    if (mode === "old") {
        list.sort( (a, b) => new Date(a.date) - new Date(b.date) );
        res.json(list);
        return;
    }

    if (mode === "manyText") {
        list.sort( (a, b) => b.text.length - a.text.length );
        res.json(list);
        return;
    }

    if (mode === "littleText") {
        list.sort( (a, b) => a.text.length - b.text.length );
        res.json(list);
        return;
    }

    if (mode === "limit") {

        let amountItemList = [];

        for (let item of list) {

            let findElemIndex = amountItemList.findIndex(el => el.name === item.name);

            if (findElemIndex === -1) {
                amountItemList.push({ name: item.name, amount: 1 });
                continue;
            }

            amountItemList[findElemIndex].amount = amountItemList[findElemIndex].amount + 1;

        }

        amountItemList = amountItemList.filter(el => el.amount < 4);

        let filteredList = list.filter(el_list => amountItemList.findIndex(el => el.name === el_list.name) === -1 ? false : true);

        res.json(filteredList);
        return;

    }

    res.json(list);

    next();

});

module.exports = router;
