import express from "express";
import {regValidate, loginValidate, profile} from "../controllers/userControllers.js"
import validate from "../middlewares/userValidation.js"
import auth from "../middlewares/authMiddleware.js"
import taskModel from "../models/taskModel.js";
import { postTask, getTask, putTask, delTask, getTaskId } from "../controllers/taskControllers.js";

const router = express.Router();

router.post("/task", auth, postTask )

router.get("/task", auth, getTask )

router.get("/task/:id", auth, getTaskId )

router.put("/task/:id", auth, putTask )

router.delete("/task/:id", auth, delTask)

export default router;