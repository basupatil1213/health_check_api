import express from "express";
import health_check_router from "./healthCheckroute.js";
import { onlyGetMethodAllowed } from "../middlewares/methodNotAllowed.js";

const registerRouter = (app) => {
    app.use("/healthz",onlyGetMethodAllowed, health_check_router);
}

export default registerRouter;