import dotenv from "dotenv";

import {
  loginService,
  logoutService,
  refreshService,
} from "../services/auth.service.js";
import { verifyToken } from "../utils/generateToken.js";
import handleRequest from "./../utils/handleRequest.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const login = (req, res) => {
  const { email, password } = req.body;

  handleRequest(
    res,
    async () => await loginService(email, password).then((data) => ({ data }))
  );
};

const logout = (req, res) => {
  const { refreshToken } = req.body;

  handleRequest(res, async () => {
    const { ref_user } = verifyToken(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    );

    return await logoutService(ref_user);
  });
};

const refresh = (req, res) => {
  const { token } = req.body;

  handleRequest(
    res,
    async () => await refreshService(token).then((data) => ({ data }))
  );
};

export { login, logout, refresh };
