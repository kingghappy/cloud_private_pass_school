import jwt from "jsonwebtoken";
import Token from "../model/token.js";

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const tokenDoc = await Token.findOne({ ref_user: decoded.ref_user });
    if (!tokenDoc) {
      return res.status(401).json({ message: "Session expired or logged out" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

export default authenticate;
