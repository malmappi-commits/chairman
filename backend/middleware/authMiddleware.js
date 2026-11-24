import jwt from "jsonwebtoken";
async function confirmAdmin(req, res, next) {
  const info = req.headers.authorization;
  if (!info) {
    return res.status(401).json({ message: "invalid or expired token" });
  }
  const token = info.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "invalid or expired token" });
  }
  try {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifyToken;
  } catch (error) {
    return res.status(401).json({ message: "invalid or expired token" });
  }
  next();
}
export function authorizeAdmin(req, res, next) {
  if (req.user.role !== "admin" && req.user.role !== "superadmin") {
    return res.status(403).json({ message: "unauthorized access" });
  }
  next();
}
export function authorizeSuperAdmin(req, res, next) {
  if (req.user.role !== "superadmin") {
    return res.status(403).json({ message: "you cannot access this feature" });
  }
  next();
}
export default confirmAdmin;
