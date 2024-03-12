const Users = require("../../api/v1/users/model");
const Organizers = require("../../api/v1/organizers/model");
const { BadRequestError } = require("../../errors");

const createOrganizer = async (req) => {
  const { organizer, role, name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan Confirm Password tidak cocok.");
  }

  const result = await Organizers.create({ organizer });

  const users = await Users.create({
    name,
    password,
    email,
    role,
    organizer: result._id,
  });

  //   delete respons nya biar tidak tampil
  delete users._doc.password;

  return users;
};
const createUsers = async (req) => {
  const { role, name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    throw new BadRequestError("Password dan Confirm Password tidak cocok.");
  }

  const result = await Users.create({
    name,
    password,
    email,
    role,
    organizer: req.user.organizer,
  });

  return result;
};

module.exports = { createOrganizer, createUsers };
