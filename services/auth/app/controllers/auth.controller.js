import {
  loginService,
  logoutService,
  refreshService,
} from "../services/auth.service.js";
import handleRequest from "./../utils/handleRequest.js";

const login = (req, res) => {
  const { email, password } = req.body;

  handleRequest(res, async () => await loginService(email, password));
};

const logout = (req, res) => {
  const ref_user = req.user.ref_user;

  handleRequest(res, async () => await logoutService(ref_user));
};

const refresh = (req, res) => {
  const { token } = req.body;

  handleRequest(res, async () => await refreshService(token));
};

export { login, logout, refresh };
