const mongoose = require("mongoose");

const categories = ["Programming", "DSA", "Web Development", "Database", "Aptitude", "Interview Preparation", "College Work", "Personal"];
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 120 },
  category: { type: String, enum: categories, default: "Programming" },
  priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
  dueDate: { type: Date, default: null },
  completed: { type: Boolean, default: false },
  completionDates: { type: [String], default: [] },
  currentStreak: { type: Number, default: 0 },
  bestStreak: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
