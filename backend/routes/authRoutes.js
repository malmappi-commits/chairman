import { registerAdmin, loginAdmin } from "../controller/authController.js";
import express from "express";
import confirmAdmin from "../middleware/authMiddleware.js";
import { authorizeAdmin } from "../middleware/authMiddleware.js";
const router = express.Router();
router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/me", confirmAdmin, authorizeAdmin, (req, res) => {
  return res
    .status(200)
    .json({ message: "authenticated successfully", user: req.user });
});
export default router;
