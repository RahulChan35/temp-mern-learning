import express from "express";
const router = express.Router();

import {
  getItems,
  getSingleItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";

router.route("/").get(getItems).post(createItem);
router.route("/:id").get(getSingleItem).patch(updateItem).delete(deleteItem);

export default router;
