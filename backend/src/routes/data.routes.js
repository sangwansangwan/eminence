const router = require("express").Router();
const { catchErrors } = require("../utils/handleErrors");
const { verifyUser } = require("../utils/token");
const dataController = require("../controllers/data.controller");

router.get("/product", verifyUser, catchErrors(dataController.getData));

module.exports = router;
