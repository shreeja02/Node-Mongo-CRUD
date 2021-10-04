var commons = {
  dbConnection: "mongodb://localhost:27017/UsersDB",
};

module.exports = {
  development: {
    ...commons,
  },
  production: {
    ...commons,
    dbConnection: "mongodb://localhost:27017/UsersDB",
  },
};
