import {
  changePasswordService,
  profileService,
} from "../services/user.service.js";
import handleRequest from "./../utils/handleRequest.js";

const getProfile = async (req, res) => {
  const userId = req.headers["x-user-id"];
  const userRole = req.headers["x-user-role"];
  console.log({ userId, userRole });
  handleRequest(
    res,
    async () =>
      await profileService(userId, userRole).then((data) => ({ data }))
  );
};

const changePassword = async (req, res) => {
  const userId = req.headers["x-user-id"];
  const { currPass, newPass } = req.body;

  handleRequest(
    res,
    async () => await changePasswordService(userId, currPass, newPass)
  );
};

export { getProfile, changePassword };
