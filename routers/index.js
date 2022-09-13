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

// Salary

module.exports = routes;
