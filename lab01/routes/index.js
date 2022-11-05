const {user} = require("../controllers");

const userController = require("../controllers").user;

module.exports = (app) => {
        app.get("/api", (_req, res) =>
                res.status(200).send({ message: "welcome to the Users API!" })
        );

        app.get("/api/user", userController.getAllUsers); 

        app.post("/api/user", userController.create);
};
