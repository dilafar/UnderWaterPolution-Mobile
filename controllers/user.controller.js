import {
  save,
  login,
  getOne,
  getAll,
  update,
  remove,
  view,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveUser = async (req, res) => {
  try {
    const user = await save(req.body);
    res.json(Success(user, "Successfully registered."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await login(req.body);
    res.json(Success(user, "Successfully logged in."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await getOne(req.params.id);
    res.json(Success(user, "Get user by id success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAll();
    res.json(Success(users, "Get all users success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const viewProfile = async (req, res) => {
  try {
    const user = await view(req.user);
    res.json(Success(user, "View profile success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await update(req.params.id, req.body);
    res.json(Success(user, "Update user by id success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await remove(req.params.id);
    res.json(Success(result, "Delete user by id success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
