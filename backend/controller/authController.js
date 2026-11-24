import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function registerAdmin(req, res) {
  try {
    const input = req.body;
    const verifiedEmail = await User.findOne({ email: input.email });
    if (verifiedEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(input.password, 10);
    const createdAcct = await User.create({
      name: input.name,
      email: input.email,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "account created successfully",
      user: {
        name: createdAcct.name,
        email: createdAcct.email,
        role: createdAcct.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Unable to create account",
      error: error.message,
    });
  }
}
export async function loginAdmin(req, res) {
  const info = req.body;
  const verifyEmail = await User.findOne({ email: info.email });
  if (!verifyEmail) {
    return res.status(400).json({ message: "acct does not exist" });
  }
  if (
    typeof info.password !== "string" ||
    !info.password ||
    !info.password.trim()
  ) {
    return res.status(400).json({ mssage: "please enter a valid password" });
  }
  const verifyPassword = await bcrypt.compare(
    info.password,
    verifyEmail.password,
  );
  if (!verifyPassword) {
    return res.status(400).json({ message: "incorrect password" });
  }
  if (verifyEmail.isActive === false) {
    return res.status(403).json({ message: "cannot access this account" });
  }
  const token = jwt.sign(
    { id: verifyEmail._id, role: verifyEmail.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  res.status(200).json({ message: "login successful", token: token });
}
