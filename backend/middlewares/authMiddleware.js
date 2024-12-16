const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey";

exports.authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access Token missing..." });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token..." });
    }
    req.user = user;
    next();
  });
};

exports.authorizeRoles = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: "Access denied" });
  }
  next();
};
