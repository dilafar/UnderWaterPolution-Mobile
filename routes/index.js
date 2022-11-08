import express from "express";
import userRouter from "./user.route.js";
import eventRouter from "./event.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/events", eventRouter);

export default apiRouter;
