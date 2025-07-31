import axios from "axios";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;

const login = async (req, res) => {
  console.log(AUTH_SERVICE_URL);
  try {
    const response = await axios.post(
      `${AUTH_SERVICE_URL}/auth/login`,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal error" });
  }
};

const refresh = async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/refresh`, req.body);
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Internal error" });
  }
};

const logout = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({ message: "Missing refresh token" });
  }

  try {
    const response = await axios.post(
      `${AUTH_SERVICE_URL}/auth/`,
      { refreshToken },
      {
        headers: {
          Authorization: req.headers.authorization,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Logout failed" });
  }
};

export { login, refresh, logout };
