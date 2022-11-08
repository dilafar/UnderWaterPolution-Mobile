import express from "express";
import userRouter from "./user.route.js";
import eventRouter from "./event.route.js";
import locationRouter from "./location.route.js";
import donationRouter from "./donation.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/events", eventRouter);
apiRouter.use("/location", locationRouter);
apiRouter.use("/donation", donationRouter);

export default apiRouter;
