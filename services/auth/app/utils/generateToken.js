import jwt from "jsonwebtoken";

const generateAccessToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: "15m" } // Thường ngắn hơn, ví dụ 15 phút
  );
};

const generateRefreshToken = (payload) => {
  return jwt.sign(
    payload,
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" } // Refresh token dài hạn hơn
  );
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret)
};

export { generateAccessToken, generateRefreshToken, verifyToken };
