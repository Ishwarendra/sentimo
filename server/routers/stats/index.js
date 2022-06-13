import { Router } from "express";
import { authenticate } from "../../auth/authenticate.js";
import statRouter from "./statRoutes.js";
import statNoteRouter from "./statNoteRouter.js";

const statsRouter = Router();
statsRouter.use(authenticate); // add user params 

statsRouter.route('*')
    .all((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Content-Type", "application/json");

        next();
    });

statsRouter.use("/", statRouter);
statsRouter.use("/note", statNoteRouter);

export default statsRouter;