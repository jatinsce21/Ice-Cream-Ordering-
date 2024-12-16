const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET_KEY = process.env.SECRET_KEY || mysecretkey;

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    SECRET_KEY,
    { expiresIn: "1h" }
  );
};

const registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPassword,
      role,
    });

    console.log(user);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required..." });
    }

    const user = await User.findOne({ email, role });
    if (!user) {
      return res.status(404).json({ message: "User not found....." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const token = generateToken(user);
    console.log("Token generated and login is successful...");
    return res.status(200).json({ token, role: user.role });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
