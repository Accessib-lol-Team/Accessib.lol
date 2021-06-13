const VerifyUserMiddleware = require("../middlewares/verifyUser.middleware");
const AuthorizationController = require("../controllers/auth.controller");
const AuthValidationMiddleware = require("../middlewares/authValidate.middleware");

exports.routesConfig = function (app) {
    app.post("/auth/login", [
        VerifyUserMiddleware.hasAuthValidFields,
        VerifyUserMiddleware.isPasswordAndUserMatch,
        AuthorizationController.login
    ]);

    app.post("/auth/refresh", [
        AuthValidationMiddleware.validJWTNeeded,
        AuthValidationMiddleware.verifyRefreshBodyField,
        AuthValidationMiddleware.validRefreshNeeded,
        AuthorizationController.login
    ]);
};
