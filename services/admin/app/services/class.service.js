import ClassRoom from "../models/class.js";

const addService = async (name, ref_subject, ref_teacher, ref_students) => {
  if (!name || !ref_subject || !ref_teacher || !ref_students)
    throw new Error("Please fill all fieds");

  const newClass = new ClassRoom({
    name,
    ref_subject,
    ref_teacher,
    ref_students,
  });

  return await newClass.save();
};

const findService = async (id) => {
  return await ClassRoom.findById(id);
};

const findAllService = async () => {
  return await ClassRoom.find();
};

const updateService = async (id, data) => {
  return await ClassRoom.findByIdAndUpdate(id, { $set: data });
};

const deleteService = async (id) => {
  return await ClassRoom.findByIdAndDelete(id);
};

export { addService, findService, findAllService, updateService, deleteService };
