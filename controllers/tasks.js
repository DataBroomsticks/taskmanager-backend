const tasks = require("../models/tasks");

const getAllTasks = async (req, res) => {
  const results = await tasks.find({});
  res.status(200).json(results);
};

const createTask = async (req, res) => {
  try {
    const task = await tasks.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err });
  }
};

const getTask = (req, res) => {
  res.send("getTask");
};

const updateTask = (req, res) => {
  res.send("updateTask");
};
const deleteTask = (req, res) => {
  res.send("deleteTasktask");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
