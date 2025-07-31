import axios from "axios";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const loginService = async (email, password) => {
  return await axios.post(`${process.env.AUTH_SERVICE_URL}/auth/login`, {
    email,
    password,
  });
};

const logoutService = async (refreshToken) => {
  if (!refreshToken) throw new Error("Missing refresh token !!");
  return await axios.post(`${process.env.AUTH_SERVICE_URL}/auth/`, {
    refreshToken,
  });
};

const refreshService = async (refreshToken) => {
  return await axios.post(`${process.env.AUTH_SERVICE_URL}/auth/refresh`, {
    refreshToken,
  });
};

export { loginService, logoutService, refreshService };
