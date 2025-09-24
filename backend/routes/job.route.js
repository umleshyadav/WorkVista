import express from "express";
import isAuthenticated from "../auth/isAuthenticated.js";
import { getJobByLoggedAdminUser, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router=express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,getJobByLoggedAdminUser);
router.route("/get/:id").get(getJobById);

export default router;
