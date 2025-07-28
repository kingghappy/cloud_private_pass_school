import express from "express";

import {
  addClass,
  findClass,
  allClass,
  updateClass,
  deleteClass,
} from "../controllers/class.controller.js";

const router = express.Router();

router.post("/add", addClass);
router.get("/find", findClass);
router.get("/all", allClass);
router.put("/update", updateClass);
router.delete("/delete", deleteClass);

export default router;
