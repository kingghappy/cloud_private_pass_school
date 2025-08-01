import User from "../models/user.js";
import Token from "./../models/token.js";
import { comparePass } from "../middlewares/hashpassword.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../utils/generateToken.js";

const loginService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not exist !!");

  const isUser = await comparePass(password, user.password);
  if (!isUser) throw new Error("Wrong password !!");

  const tokenInDB = await Token.findOne({ ref_user: user._id });
  console.log({tokenInDB})
  if (tokenInDB) throw new Error("User is already in another session !!");

  const payload = {
    email: user.email,
    ref_user: user._id,
    role: user.role,
    ref_profile: user.ref_profile,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  await Token.create({
    ref_user: user._id,
    refreshToken,
  });

  return { accessToken, refreshToken };
};

const logoutService = async (ref_user) => {
  await Token.findOneAndDelete({ ref_user });

  return {
    message: "Logout successful. Please remove the token on client side.",
  };
};

const refreshService = async (refreshToken) => {
  const payload = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET);

  const existToken = await Token.findOne({
    ref_user: payload.ref_user,
    refreshToken,
  });
  if (!existToken) throw new Error("Token invalid !!");
  const { email, ref_user, role, ref_profile } = payload;
  const accessToken = generateAccessToken({
    email,
    ref_user,
    role,
    ref_profile,
  });

  return { accessToken };
};

export { loginService, logoutService, refreshService };
