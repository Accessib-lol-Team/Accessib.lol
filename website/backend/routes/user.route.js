const UsersController = require("../controllers/user.controller");
// const PermissionMiddleware = require("..middlewares/authPermission.middleware");
const ValidationMiddleware = require("../middlewares/authValidate.middleware");

exports.routesConfig = function (app) {
    app.post("/user", [UsersController.insert]);
    app.get("/user/list", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.list
    ]);
    app.get("/user/:userId", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getById
    ]);
    app.get("/user/email/:email", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getByEmail
    ]);
    app.get("/user/lolUsername/:lolUsername", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getByLoLUsername
    ]);
    app.get("/user/lolUsernameSafe/:lolUsernameSafe", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.getByLoLUsernameSafe
    ]);
    app.patch("/user/:userId", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.onlySameUserOrAdminCanDoThisAction,
        UsersController.patchById
    ]);
    app.delete("/user/:userId", [
        ValidationMiddleware.validJWTNeeded,
        // PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),
        UsersController.removeById
    ]);
};
