import jwt from "jsonwebtoken";
import { getUser } from "../repository/index.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await getUser({ _id });
    if (!user) {
      res.status(401).send("Unauthorized");
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    res.status(401).send("Unauthorized");
  }
};
