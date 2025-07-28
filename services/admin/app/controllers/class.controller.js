import {
  addService,
  deleteService,
  findAllService,
  findService,
  updateService,
} from "../services/class.service.js";
import handleRequest from "../utils/handleRequest.js";

const addClass = (req, res) => {
  const { name, ref_subject, ref_teacher, ref_students } = req.body;

  handleRequest(
    res,
    async () =>
      await addService(name, ref_subject, ref_teacher, ref_students).then(
        (data) => ({ data })
      )
  );
};

const findClass = (req, res) => {
  const { id } = req.query;

  handleRequest(
    res,
    async () => await findService(id).then((data) => ({ data }))
  );
};

const allClass = (req, res) => {
  handleRequest(
    res,
    async () => await findAllService().then((data) => ({ data }))
  );
};

const updateClass = (req, res) => {
  const { id } = req.query;
  const { data } = req.body;

  handleRequest(
    res,
    async () => await updateService(id, data).then((data) => ({ data }))
  );
};

const deleteClass = (req, res) => {
  const { id } = req.query;

  handleRequest(
    res,
    async () => await deleteService(id).then((data) => ({ data }))
  );
};

export { addClass, findClass, allClass, updateClass, deleteClass };
