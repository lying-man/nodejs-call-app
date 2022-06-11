
const express = require("express");
const app = express();
const authRouter = require("./routers/authRouter.js");
const messagesRouter = require("./routers/messagesRouter.js");
const sendMessageRouter = require("./routers/sendMessageRouter.js")
const deleteMessage = require("./routers/deleteMessage.js")
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/user", messagesRouter);
app.use("/user", sendMessageRouter);
app.use("/message", deleteMessage);

app.get("/", (req, res) => {

    let value = req.query.value;

    value = value || "Not queries"

    res.send(value);

})

app.listen(PORT, () => console.log("Server has been started"));
