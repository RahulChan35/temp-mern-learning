import { StatusCodes } from "http-status-codes";
import Item from "../models/itemModel.js";
import { NotFoundError } from "../errors/customErrors.js";

export const getItems = async (req, res) => {
  const items = await Item.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json(items);
};

export const getSingleItem = async (req, res) => {
  const { id } = req.params;
  const singleItem = await Item.findById(id);
  if (!singleItem) {
    throw new NotFoundError(`no item with id: ${id}`);
  }
  res.status(StatusCodes.OK).json(singleItem);
};

export const createItem = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const item = await Item.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "item created" });
};

export const updateItem = async (req, res) => {
  const { id } = req.params;
  const updatedItem = await Item.findByIdAndUpdate(id, req.body);
  res.status(StatusCodes.OK).json({ msg: "item updated" });
};

export const deleteItem = async (req, res) => {
  const { id } = req.params;
  const deletedItem = await Item.findByIdAndDelete(id);
  res.status(StatusCodes.OK).send("item deleted");
};
