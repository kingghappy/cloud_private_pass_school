import express from "express";
import {
  addUser,
  allUser,
  deleteManyUser,
  deleteUser,
  findUser,
  updateManyUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/find", findUser);
router.get("/all", allUser);
router.post("/add", addUser);
router.put("/update", updateUser);
router.put("/update-many", updateManyUser);
router.delete("/delete", deleteUser);
router.delete("/delete-many", deleteManyUser);

export default router;
