module.exports = app => {
    const User = require("../controller/user.controller");
  
    var router = require("express").Router();

    router.post("/", User.create);
    router.put("/:id", User.update);
    router.get("/quiz/1", User.findAll)
    router.get("/quiz/2", User.findAll2)
    router.get("/", User.findOne);
    app.use('/back/users', router);
};