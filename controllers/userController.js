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

const updateUser = (req, res) => {
  const { uname, age, email, mobile, uadd } = req.body;
  const update_user_sql =
    "update users set uname = ?, age=?, email=?,mobile=?,uadd=? where id =?";
  db.query(
    update_user_sql,
    [uname, age, email, mobile, uadd, req.params.id],
    (err, result) => {
      if (err) {
        return res.status(500).send({
          success: false,
          error: err,
        });
      } else {
        res.status(200).send({
          success: true,
          message: "user updated",
        });
      }
    }
  );
};

const deleteUser = (req, res) => {
  const sql_delete = "delete from users where id = ?";
  db.query(sql_delete, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).send({
        success: false,
        error: err,
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).send({
        success: true,
        message: "User not found",
      });
    } else {
      res.status(200).send({
        success: true,
        message: "user deleted",
      });
    }
  });
};

const getDataByID = (req, res) => {
  const id = req.params.id;
  search_sql = "select * from users where id = ?";
  db.query(search_sql, [id], (err, result) => {
    if (err) {
      return res.status(500).send({
        sucess: false,
        error: err,
      });
    }
    if (result.length === 0) {
      return res.status(404).send({
        sucess: true,
        message: "User not found",
      });
    } else {
      res.status(200).json(result);
    }
  });
};

module.exports = {
  addNewUser,
  getAllData,
  updateUser,
  deleteUser,
  getDataByID,
};
