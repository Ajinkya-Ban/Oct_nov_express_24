const { body } = require("express-validator");
const db = require("../dbconfig/db");

const validateUsers = [
  body("uname")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be atleast 2 characters")
    .matches(/^[A-Za-z\s]+$/)
    .withMessage("Name must contain only letters"),
  body("age").isInt({ min: 1 }).withMessage("Valid age is required"),
  body("email")
    .isEmail()
    .withMessage("valid email is required")
    .custom(async (value) => {
      return new Promise((resolve, reject) => {
        db.query(
          "select * from users where email = ?",
          [value],
          (err, result) => {
            if (err) return reject(new Error("Database error"));
            if (result.length > 0) {
              return reject(new Error("Email already exists"));
            }
            resolve(true);
          }
        );
      });
    }),
  body("mobile")
    .isMobilePhone()
    .withMessage("Valid mobile number is required")
    .isLength({ max: 10 })
    .withMessage("Mobile number should be 10 digit long")
    .matches(/^\d+$/)
    .withMessage("Only digits allowed")
    .custom(async (value) => {
      return new Promise((resolve, reject) => {
        db.query(
          "select * from users where mobile = ?",
          [value],
          (err, result) => {
            if (err) return reject(new Error("Database error"));
            if (result.length > 0) {
              return reject(new Error("Mobile number is already exists"));
            }
            resolve(true);
          }
        );
      });
    }),
];

module.exports = { validateUsers };
