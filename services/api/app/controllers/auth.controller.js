import {
  loginService,
  logoutService,
  refreshService,
} from "../services/auth.service.js";
import handleRequest from "../utils/handleRequest.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  handleRequest(res, async () => await loginService( email, password ));
};

const refresh = async (req, res) => {
  const { refreshToken } = req.body;

  handleRequest(res, async () => await refreshService(refreshToken));
};

const logout = async (req, res) => {
  const { refreshToken } = req.body;

  handleRequest(
    res,
    async () => await logoutService(refreshToken)
  );
};

export { login, refresh, logout };
