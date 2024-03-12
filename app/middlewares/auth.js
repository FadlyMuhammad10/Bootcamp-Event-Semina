const { UnauthenticatedError, UnauthorizedError } = require("../errors");
const { isTokenValid } = require("../utils");

const authenticatedUser = async (req, res, next) => {
  try {
    let token;
    // check header
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      token = authHeader.split(" ")[1];
    }
    if (!token) {
      throw new UnauthenticatedError("Authentication failed");
    }
    const payload = isTokenValid({ token });
    req.user = {
      id: payload.userId,
      name: payload.name,
      email: payload.email,
      role: payload.role,
      organizer: payload.organizer,
    };
    next();
  } catch (error) {
    next(error);
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};

module.exports = { authenticatedUser, authorizeRoles };
