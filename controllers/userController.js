const db = require("../dbconfig/db");

const addNewUser = (req, res) => {
  const { uname, age, email, mobile, uadd } = req.body;
  const insert_query =
    "insert into users(uname, age, email, mobile, uadd) values(?,?,?,?,?)";
  db.query(insert_query, [uname, age, email, mobile, uadd], (err, result) => {
    if (err) {
      return res.status(500).send({
        success: false,
        message: err,
      });
    }
    res.json(result);
  });
};

const getAllData = (req, res) => {
  db.query("select * from users", (err, result) => {
    if (err) {
      return res.status(500).send({
        sucess: false,
        error: err,
      });
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = { addNewUser, getAllData };
