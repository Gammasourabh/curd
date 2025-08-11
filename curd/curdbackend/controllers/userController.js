const User = require("../models/User");
const bcrypt = require("bcryptjs");
// @desc Register a new user
// @route POST /api/users/register
const registerUser = async (req, res) => {
try {
const { name, email, password } = req.body;
// Check if user exists
const userExists = await User.findOne({ email });
if (userExists) return res.status(400).json({ message:
"User already exists" });
// Hash password
const hashedPassword = await bcrypt.hash(password, 10);
// Create user
const newUser = await User.create({
name,
email,
password: hashedPassword,
});
res.status(201).json({ message: "User registered successfully", user: newUser });
} catch (error) {
res.status(500).json({ message: error.message });
}
};

module.exports = { registerUser};