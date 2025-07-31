import User from "../models/user.js";
import { comparePass } from "../utils/hashpassword.js";
import Student from "../models/student.js";
import Teacher from "../models/teacher.js";

const models = {
  student: Student,
  teacher: Teacher,
};

const profileService = async (userId, userRole) => {
  const model = models[userRole];

  return await User.findById(userId).populate({
  path: "ref_profile",
  select: "-_id" // chỉ lấy một vài trường
}).select("-_id -password")
};

const changePasswordService = async (userId, currPass, newPass) => {
  //find user by refId
  const user = await User.findById(userId);
  if (!user) throw new Error("User not exist !!");

  //check user is changing password
  const isUser = await comparePass(currPass, user.password);
  if (!isUser) throw new Error("Wrong password !!");

  //update password
  user.password = newPass;
  if (!user.passChange) user.passChange = true;
  await user.save();

  return { message: "Update password success !!" };
};

export { profileService, changePasswordService };
