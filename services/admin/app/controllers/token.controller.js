import handleRequest from "../../../auth/app/utils/handleRequest.js";
import { allService, findService } from "../services/token.service.js";

const allToken = (req, res) => {
  handleRequest(res, async () => await allService());
};

const findToken = (req, res) => {
  const { rer_user } = req.query;

  handleRequest(
    res,
    async () => await findService(rer_user).then((data) => ({ data }))
  );
};

const deleteToken = (req, res) => {
  const { rer_user } = req.query;

  handleRequest(
    res,
    async () => await findService(rer_user).then((data) => ({ data }))
  );
};

export { allToken, findToken, deleteToken };
