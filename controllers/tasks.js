const tasks = require("../models/tasks");

const getAllTasks = async (req, res) => {
  const results = await tasks.find({});
  res.status(200).json({ results });
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

const getTask = async (req, res) => {
  try {
    const results = await tasks.findOne({ _id: req.params.id });
    if (!results) return res.status(404).json({ msg: "didn't find anything" });
    res.status(200).json({ results });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = (req, res) => {
  res.send("updateTask");
};
const deleteTask = async (req, res) => {
  try {
    const results = await tasks.deleteOne({ _id: req.params.id });
    if (results.deletedCount === 0)
      return res.status(404).json({ msg: "no task with that id" });
    res.status(200).json({ results });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
