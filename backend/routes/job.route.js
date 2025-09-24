import express from "express";
import isAuthenticated from "../auth/isAuthenticated.js";
import { getJobByLoggedAdminUser, getAllJobs, getJobById, postJob } from "../controllers/job.controller.js";

const router=express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/getadminjobs").get(isAuthenticated,getJobByLoggedAdminUser);
router.route("/get/:id").get(isAuthenticated,getJobById);

export default router;
