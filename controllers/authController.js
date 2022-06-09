
const db = require("../db.js");
const bcrypt = require("bcryptjs");

class authController {

    async login(req, res, next) {

        const { name, pass } = req.body;

        let user = await db.query("SELECT * FROM users WHERE userName = $1", [name]);

        if (!user.rows.length) {
            res.json({ errorName: "Такого пользователя не существует" });
            next();
            return;
        }

        user = user.rows[0];
        const checkPass = bcrypt.compareSync(pass, user.password);

        if (!checkPass) {
            res.json({ errorPass: "Неправильный пароль" });
            next();
            return;
        }

        res.json({ status: "OK" });

        next();
    }

    async register(req, res, next) {

        const { name, pass } = req.body;
        const hasUser = await db.query("SELECT userName FROM users WHERE userName = $1", [name]);
        
        if (hasUser.rows.length) {
            res.json({error: "Такой пользователь уже существует"})
            next();
            return;
        }

        const hashPass = bcrypt.hashSync(pass, 7);
        const result = await db.query("INSERT INTO users (userName, password) VALUES ($1, $2)", [name, hashPass]);
        res.json({status: "OK"});

        next();

    }
    
}

module.exports = new authController();
