const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: "2h",
  jwtSecret: process.env.jwtSecret,
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
