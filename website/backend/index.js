const express = require("express");
/* eslint-disable */
const dotenv = require("dotenv").config();
/* eslint-enable */
const app = express();

const AuthRouter = require("./routes/auth.route");
const UserRouter = require("./routes/user.route");

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Methods",
        "GET,HEAD,PUT,PATCH,POST,DELETE"
    );
    res.header("Access-Control-Expose-Headers", "Content-Length");
    res.header(
        "Access-Control-Allow-Headers",
        "Accept, Authorization, Content-Type, X-Requested-With, Range"
    );
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(express.json());
UserRouter.routesConfig(app);
AuthRouter.routesConfig(app);

app.listen(process.env.PORT, function () {
    console.log(
        `Accessib.lol server is listening on port: ${process.env.PORT}`
    );
});
