const Controller = require("../controllers");

const routes = require("express").Router();

routes.get("/", Controller.index);

// Department
routes.get("/departments", Controller.getAllDepartments);

// Job
routes.get("/jobs", Controller.getAllJobs);
routes.get("/jobs/add", Controller.addJob);
routes.post("/jobs/add", Controller.createJob);
routes.get("/jobs/:id/detail", Controller.getDetailedJob);
routes.get("/jobs/:id/edit", Controller.editJob);
routes.post("/jobs/:id/edit", Controller.updateJob);

// Salary
routes.get("/salary/add/:jobId", Controller.addSalary);
routes.post("/salary/add/:jobId", Controller.createSalary);

// Hiring
routes.get("/hiring", Controller.getAllJobsHiring);
routes.get("/hiring/:id/detail", Controller.getDetailedJobHiring);

module.exports = routes;
