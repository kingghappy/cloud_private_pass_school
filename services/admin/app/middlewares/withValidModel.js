import User from "../models/user.js";
import Student from "../models/student.js";
import Teacher from "../models/teacher.js";

const models = {
  student: Student,
  teacher: Teacher,
  user: User
};

const withValidModel = async (role, handler) => {
  const model = models[role];
  if (!model) throw new Error("Invalid Role !!");
  return await handler(model);
};

export default withValidModel