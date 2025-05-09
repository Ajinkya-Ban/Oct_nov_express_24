const express = require("express");
const {
  addNewUser,
  getAllData,
  updateUser,
  deleteUser,
  getDataByID,
} = require("../controllers/userController");

const router = express.Router();

router.post("/add-user", addNewUser);
router.get("/get-data", getAllData);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.get("/get-data/:id", getDataByID);

module.exports = router;
