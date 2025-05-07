const getUser = (req, res) => {
  res.status(200).send({
    success: true,
    message: "Data coming from MVC pattern",
  });
};

module.exports = { getUser };
