const getAllTasks = (req, res) => {
  res.send("all items from the file");
};

const createTask = (req, res) => {
  res.send("createTast");
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
