import handleRequest from "../utils/handleRequest.js";

import {
  addService,
  findService,
  findAllService,
  updateService,
  deleteService,
} from "../services/subject.service.js";

const addSubject = (req, res) => {
  const { name, image } = req.body;

  handleRequest(
    res,
    async () => await addService(name, image).then((data) => ({ data }))
  );
};

const findSubject = (req, res) => {
  const { id } = req.query;
  handleRequest(
    res,
    async () => await findService(id).then((data) => ({ data }))
  );
};

const findAllSubject = (req, res) => {
  handleRequest(
    res,
    async () => await findAllService().then((data) => ({ data }))
  );
};

const updateSubject = (req, res) => {
  const { id } = req.query;
  const { name, image } = req.body;

  handleRequest(
    res,
    async () => await updateService(id, name, image).then((data) => ({ data }))
  );
};

const deleteSubject = (req, res) => {
  const { id } = req.query;

  handleRequest(
    res,
    async () => await deleteService(id).then((data) => ({ data }))
  );
};

export { addSubject, findSubject, findAllSubject, updateSubject, deleteSubject };
