
const router = require("express").Router();
const auth = require("../controllers/authController.js");

router.post("/login", auth.login);
router.post("/register", auth.register);

module.exports = router;
