import User from "../models/user.js";
import withValidModel from "../middlewares/withValidModel.js";


const findService = async (role, ref_id) =>
  await withValidModel(role, async (model) => await model.findById(ref_id));

const getAllService = async (role, select) =>
  await withValidModel(
    role,
    async (model) => await model.find().select(select || "-password")
  );

const addService = async (role, data, defaultPassword = "123456") =>
  await withValidModel(role, async (model) => {
    const profiles = await model.insertMany(data);

    const users = await Promise.all(
      profiles.map(async (profile) => {
        const userData = {
          email: profile.email,
          password: defaultPassword,
          role: role,
          ref_profile: profile._id,
          profileModel: role.replace(/^./, role[0].toUpperCase()),
        };
        return await User.create([userData]);
      })
    );

    await Promise.all(
      profiles.map((profile, index) => {
        return model.findByIdAndUpdate(profile._id, {
          ref_user: users[index][0]._id,
        });
      })
    );
    return {
      profiles,
      users: users.flat(),
    };
  });

const updateService = async (role, ref_id, data) =>
  await withValidModel(
    role,
    async (model) =>
      await model.findByIdAndUpdate(ref_id, { $set: data })
  );

const updateManyService = async (role, filter) =>
  await withValidModel(role, async (model) => await model.updateMany(filter));


const deleteService = async (role, ref_id) =>
  await withValidModel(
    role,
    async (model) => await model.findByIdAndDelete(ref_id)
  );

const deleteManyService = async (role, filter) =>
  await withValidModel(role, async (model) => {
    await model.deleteMany(filter);
    await model.collection.drop();
  });


export {
  getAllService,
  addService,
  findService,
  deleteService,
  deleteManyService,
  updateService,
  updateManyService,
};
