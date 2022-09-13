const { Op } = require(`sequelize`);
const { Department, Job, Salary } = require("../models");

class Controller {
  static index(req, res) {
    res.render("home");
  }

  // Department
  static getAllDepartments(req, res) {
    Department.findAll()
      .then((departments) => {
        res.send({ departments });
      })
      .catch((err) => {
        res.send(err);
        console.log("catch", err);
      });
  }

  // Job
  static getAllJobs(req, res) {
    Job.findAll({
      include: [
        {
          model: Department,
        },
      ],
    })
      .then((jobs) => {
        res.render("jobs", { jobs });
      })
      .catch((err) => {
        res.send(err);
        console.log("catch", err);
      });
  }
  static async addJob(req, res) {
    Department.findAll()
      .then((departments) => {
        res.render("jobs-add", { departments });
      })
      .catch((err) => {
        res.send(err);
        console.log("catch", err);
      });
  }
  static createJob(req, res) {
    let body = {
      title: req.body.title,
      DepartmentId: Number(req.body.department),
      requirement: req.body.requirement,
      vacancy: req.body.vacancy,
    };
    Job.create(body)
      .then((addJob) => {
        let msg = `${addJob.event} added successfully`;
        res.redirect("/jobs");
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  static getDetailedJob(req, res) {
    const id = req.params.id;
    console.log("Idnya job adalah:", id);
    Job.findOne({
      where: { id: id },
      include: [
        {
          model: Department,
        },
        {
          model: Salary,
        },
      ],
    })
      .then((job) => {
        res.render("jobs-detail", { job });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
}
module.exports = Controller;
