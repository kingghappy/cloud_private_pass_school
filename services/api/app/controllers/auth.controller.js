import axios from "axios";

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL;

const login = async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/login`, req.body);
    res.json(response);
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
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/logout`, null, {
      headers: {
        Authorization: req.headers.authorization,
      },
    });
    res.json(response.data);
  } catch (error) {
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Logout failed" });
  }
}

export { login, refresh, logout };
