const express = require("express");
const { registerUser, loginUser } = require("../controllers/UserController");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get(
  "/admin",
  authenticateToken,
  authorizeRoles(["admin"]),
  (req, res) => {
    res.status(200).json({ message: "Welcome, Admin" });
  }
);

router.get(
  "/vendor",
  authenticateToken,
  authorizeRoles(["vendor"]),
  (req, res) => {
    res.status(200).json({ message: "Welcome, Vendor" });
  }
);

router.get(
  "/user",
  authenticateToken,
  authorizeRoles(["user", "admin", "vendor"]),
  (req, res) => {
    res.status(200).json({ message: "Welcome, User" });
  }
);

module.exports = router;
