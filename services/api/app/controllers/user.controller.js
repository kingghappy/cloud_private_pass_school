import {
  profileService,
  changePasswordService,
} from "../services/user.service.js";
import handleRequest from "../utils/handleRequest.js";

const profile = (req, res) => {
    const {role, ref_user} = req.user
    console.log({role, ref_user} )
  handleRequest(res, async () => await profileService(role, ref_user));
};

const changePassword = async (req, res) => {
  const { ref_user } = req.user;
  const { currPass, newPass } = req.body;

  handleRequest(
    res,
    async () => await changePasswordService(ref_user, currPass, newPass)
  );
};

export { profile, changePassword };
