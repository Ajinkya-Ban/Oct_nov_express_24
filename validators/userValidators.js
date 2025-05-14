const { body } = require("express-validator");

const validateUsers = [
  body("uname").notEmpty().withMessage("Name is required"),
  body("age").isInt({ min: 1 }).withMessage("Valid age is required"),
  body("email").isEmail().withMessage("valid email is required"),
  body("mobile").isMobilePhone().withMessage("Valid mobile number is required"),
];

module.exports = { validateUsers };
