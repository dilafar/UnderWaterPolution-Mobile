import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  saveUser,
  loginUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const save = async (data) => {
  let { firstName, lastName, email, userName, password, role } = data;
  const userNameObj = { userName };
  try {
    const exUser = await getUser(userNameObj);
    if (exUser) {
      throw new AppError("User already exists.", 400);
    } else {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);
      password = hash;
    }
    await saveUser({
      firstName,
      lastName,
      email,
      userName,
      password,
      role,
    });
    return Promise.resolve("Successfully registered.");
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const login = async (data) => {
  const { userName, password } = data;
  try {
    const user = await loginUser(userName);
    if (!user) {
      throw new AppError("User does not exist.", 404);
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new AppError("Password is incorrect.", 400);
      } else {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        return Promise.resolve({ token });
      }
    }
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getOne = async (userId) => {
  try {
    const user = await getUser(userId);
    return Promise.resolve(user);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAll = async () => {
  try {
    const users = await getAllUsers();
    return Promise.resolve(users);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const view = async (user) => {
  try {
    return Promise.resolve({
      _id: user?._id,
      firstName: user?.firstName,
      lastName: user?.lastName,
      userName: user?.userName,
      email: user?.email,
      role: user?.role,
      mobile: user?.mobile,
      address: user?.address,
      url: user?.url,
    });
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const update = async (userId, data) => {
  try {
    const user = await updateUser(userId, data);
    return Promise.resolve(user);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const remove = async (userId) => {
  try {
    await deleteUser(userId).then(() => Promise.resolve(userId));
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
