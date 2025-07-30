import User from "../models/user.js";
import Token from "./../models/token.js";
import { comparePass } from "../middlewares/hashpassword.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} from "../utils/generateToken.js";

const loginService = async (email, password) => {
  //find user by email
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not exist !!");

  //check if user doing
  const isUser = await comparePass(password, user.password);
  if (!isUser) throw new Error("Wrong password !!");

  const payload = { email: user.email, ref_user: user._id };

  //respone token to client
  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  await Token.create({
    ref_user: user._id,
    refreshToken,
  });

  return { accessToken, refreshToken };
};

const logoutService = async (ref_user) => {
  await Token.deleteOne({ ref_user });

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

  const {email, ref_user} = payload
  const accessToken = generateAccessToken({email, ref_user});

  return { accessToken };
};

export { loginService, logoutService, refreshService };
