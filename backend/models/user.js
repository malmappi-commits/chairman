import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "superadmin"],
    default: "admin",
  },
  isActive: { type: Boolean, default: true },
});
const User = mongoose.model("User", userSchema);
export default User;
