import Subject from "./../models/subject.js";

const addService = async (name, image) => {
  if (!name || !image) throw new Error("Please fill all fieds");

  const newSubject = new Subject({
    name,
    image,
  });

  return await newSubject.save();
};

const findService = async (id) => {
  return await Subject.findById(id);
};

const findAllService = async () => {
  return await Subject.find();
};

const updateService = async (id, data) => {
  return await Subject.findByIdAndUpdate(id, {$set: data})
};

const deleteService = async (id) => {
    return await Subject.findByIdAndDelete(id)
}

export { addService, findService, findAllService, updateService, deleteService };
