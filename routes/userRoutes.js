const express = require("express");
const { addNewUser, getAllData } = require("../controllers/userController");

const router = express.Router();

router.post("/add-user", addNewUser);
router.get("/get-data", getAllData);

module.exports = router;
