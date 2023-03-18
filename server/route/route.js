import express from "express";

const route = express.Router();
import {createstudent, getstudent, updatestudent, deletestudent} from "../Controller/student.js";

route.post("/create", createstudent);

route.get("/get", getstudent);

route.put("/update", updatestudent);

route.delete("/delete/:id", deletestudent);

export default route;
