import handleRequest from "./../utils/handleRequest.js";
import {
  allService,
  findService,
  deleteService,
} from "../services/token.service.js";

const allToken = (req, res) => {
  handleRequest(res, async () => await allService());
};

const findToken = (req, res) => {
  const { ref_user } = req.query;

  handleRequest(
    res,
    async () => await findService(ref_user).then((data) => ({ data }))
  );
};

const deleteToken = (req, res) => {
  const { ref_user } = req.query;

  handleRequest(
    res,
    async () => await deleteService(ref_user).then((data) => ({ data }))
  );
};

export { allToken, findToken, deleteToken };
