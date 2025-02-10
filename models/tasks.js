const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    maxlength: [20, "name cannot be more than 20 chars"],
    required: [true, "must provide name"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("task", taskSchema);
