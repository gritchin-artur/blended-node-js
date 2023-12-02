const {HttpError} = require("../utils/HttpError")

const Task = require("../models/Task")

const getAllTasksService = async () => {
return await Task.find()
};

const getOneTaskService = async (id) => {
  const task = Task.findById(id);
  if (!task) {
    throw new HttpError(404, "Task not found");
  }
  return task;
};

const createTaskService = async (data) => {
return await Task.create(data)
};

const updateTaskService = async (id, data) => {
  const updatedTask = await Task.findByIdAndUpdate(id, data, {new: true})
  if (!updatedTask) {
    throw new HttpError(404, "Task not found");
  }
  return updatedTask
};

const deleteTaskService = async (id) => {
const deleteTask = await Task.findByIdAndDelete(id)
  if (!deleteTask) {
    throw new HttpError(404, "Task not found");
  }
  return deleteTask
};

module.exports = {
  getAllTasksService,
  getOneTaskService,
  createTaskService,
  updateTaskService,
  deleteTaskService,
};
