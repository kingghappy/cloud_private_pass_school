import {
  getAllService,
  findService,
  updateService,
  updateManyService,
  deleteService,
  deleteManyService,
  addService,
} from "../services/user.service.js";

import handleRequest from "../utils/handleRequest.js";

const allUser = (req, res) => {
  const { role, select } = req.query;
  handleRequest(
    res,
    async () => await getAllService(role, select).then((data) => ({ data }))
  );
};

const findUser = (req, res) => {
  const { role, ref_id } = req.query;
  handleRequest(
    res,
    async () => await findService(role, ref_id).then((user) => ({ user }))
  );
};

const addUser = (req, res) => {
  const { data } = req.body;
  const { role } = req.query;
  handleRequest(
    res,
    async () =>
      await addService(role, data).then((result) => ({
        message: "Add data success",
        result,
      }))
  );
};

const updateUser = (req, res) => {
  const { data } = req.body;
  const { role, ref_id } = req.query;
  handleRequest(
    res,
    async () =>
      await updateService(role, ref_id, data).then((dataNew) => ({
        dataNew,
      }))
  );
};

const updateManyUser = (req, res) => {
  const { role, filter } = req.query;
  handleRequest(
    res,
    async () =>
      await updateManyService(role, filter).then(() => ({
        message: "Update success !!",
      }))
  );
};

const deleteUser = (req, res) => {
  const { role, ref_id } = req.query;
  handleRequest(
    res,
    async () =>
      await deleteService(role, ref_id).then((deleted) => ({ deleted }))
  );
};

const deleteManyUser = (req, res) => {
  const { role, filter } = req.query;
  handleRequest(
    res,
    async () =>
      await deleteManyService(role, filter).then(() => ({
        message: "Delete all success!",
      }))
  );
};

export {
  allUser,
  findUser,
  addUser,
  updateUser,
  updateManyUser,
  deleteUser,
  deleteManyUser,
};
