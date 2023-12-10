const router = require("express").Router();
const { catchErrors } = require("../utils/handleErrors");
const validate = require("../../middlewares/validate");
const userValidation = require("../validations/user.validation");
const userController = require("../controllers/user.controller");

router.post("/signup", validate(userValidation.addUser), catchErrors(userController.addUser));

module.exports = router;
