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
        res.redirect("/jobs");
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  static getDetailedJob(req, res) {
    const id = req.params.id;
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
  static async editJob(req, res) {
    const id = req.params.id;
    Department.findAll() // Buat get menu department select option
      .then((departments) => {
        Job.findOne({
          where: { id: id },
          include: [
            {
              model: Department,
            },
          ],
        })
          .then((job) => {
            res.render("jobs-edit", { job, departments });
          })
          .catch((err) => {
            res.send(err);
            console.log("catch", err);
          });
      })
      .catch((err) => {
        res.send(err);
        console.log("catch", err);
      });
  }
  static updateJob(req, res) {
    const id = req.params.id;
    let body = {
      title: req.body.title,
      DepartmentId: Number(req.body.department),
      requirement: req.body.requirement,
      vacancy: req.body.vacancy,
    };
    Job.update(body, {
      where: {
        id: id,
      },
    })
      .then((addJob) => {
        res.redirect(`/jobs/${id}/detail`);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  // Salary
  static async addSalary(req, res) {
    const id = req.params.jobId;
    Job.findOne({
      where: { id: id },
    })
      .then((job) => {
        res.render("salary-add", { job });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
  static createSalary(req, res) {
    const id = req.params.jobId;
    let body = {
      JobId: Number(id),
      amount: Number(req.body.amount),
      bonus: Number(req.body.bonus),
    };
    Salary.create(body)
      .then((addJob) => {
        res.redirect(`/jobs/${id}/detail`);
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }

  // Hiring
  static getAllJobsHiring(req, res) {
    Job.findAll({
      include: [
        {
          model: Department,
        },
      ],
    })
      .then((jobs) => {
        res.render("hiring", { jobs });
      })
      .catch((err) => {
        res.send(err);
        console.log("catch", err);
      });
  }
  static getDetailedJobHiring(req, res) {
    const id = req.params.id;
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
        res.render("hiring-detail", { job });
      })
      .catch((err) => {
        console.log(err);
        res.send(err);
      });
  }
}
module.exports = Controller;
