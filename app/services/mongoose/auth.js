const Users = require("../../api/v1/users/model");
const { BadRequestError, UnauthorizedError } = require("../../errors");
const { createJwt, createTokenUser } = require("../../utils");

const signIn = async (req) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("please provide email and password");
  }
  const result = await Users.findOne({ email: email });
  if (!result) {
    throw new UnauthorizedError("Invalid Credentials");
  }
  const isPasswordCorrect = await result.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError("Invalid Credentials");
  }
  const token = createJwt({ payload: createTokenUser(result) });

  return token;
};

module.exports = { signIn };
