import dotenv from "dotenv";
import axios from "axios";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const profileService = async (role, ref_user) => {
  console.log({role, ref_user})
  return await axios.get(`${process.env.USER_SERVICE_URL}/profile`, {
    headers: {
      "x-user-id": ref_user,
      "x-user-role": role,
    },
  });
};

const changePasswordService = async (ref_user, currPass, newPass) => {
  return await axios.put(
    `${process.env.USER_SERVICE_URL}/change-pass`,
    { currPass, newPass },
    {
      headers: {
        "x-user-id": ref_user,
      },
    }
  );
};

export { profileService, changePasswordService };
