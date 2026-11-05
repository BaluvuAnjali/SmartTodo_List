const Task = require("../models/Task");

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function calculateStreaks(dates) {
  const sorted = [...new Set(dates)].sort();
  if (!sorted.length) return { currentStreak: 0, bestStreak: 0 };
  const dayMs = 86400000;
  let run = 1, best = 1;
  for (let i = 1; i < sorted.length; i += 1) {
    const gap = (Date.parse(`${sorted[i]}T00:00:00Z`) - Date.parse(`${sorted[i - 1]}T00:00:00Z`)) / dayMs;
    run = gap === 1 ? run + 1 : 1;
    best = Math.max(best, run);
  }
  const today = dateKey();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const yesterday = dateKey(yesterdayDate);
  const last = sorted[sorted.length - 1];
  const currentStreak = last === today || last === yesterday ? run : 0;
  return { currentStreak, bestStreak: best };
}

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) { next(error); }
};

exports.createTask = async (req, res, next) => {
  try {
    const { title, category, priority, dueDate } = req.body;
    if (!title || !title.trim()) return res.status(400).json({ message: "Task title is required." });
    const task = await Task.create({ title: title.trim(), category, priority, dueDate: dueDate || null });
    res.status(201).json(task);
  } catch (error) { next(error); }
};

exports.updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found." });
    const { title, category, priority, dueDate, completed } = req.body;
    if (title !== undefined) {
      if (!String(title).trim()) return res.status(400).json({ message: "Task title cannot be empty." });
      task.title = String(title).trim();
    }
    if (category !== undefined) task.category = category;
    if (priority !== undefined) task.priority = priority;
    if (dueDate !== undefined) task.dueDate = dueDate || null;
    if (completed === true && !task.completed) {
      const today = dateKey();
      if (!task.completionDates.includes(today)) task.completionDates.push(today);
      const streaks = calculateStreaks(task.completionDates);
      task.currentStreak = streaks.currentStreak;
      task.bestStreak = Math.max(task.bestStreak, streaks.bestStreak);
      task.completed = true;
    } else if (completed === false) {
      task.completed = false;
      const streaks = calculateStreaks(task.completionDates);
      task.currentStreak = streaks.currentStreak;
      task.bestStreak = Math.max(task.bestStreak, streaks.bestStreak);
    }
    await task.save();
    res.json(task);
  } catch (error) { next(error); }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found." });
    res.json({ message: "Task deleted successfully." });
  } catch (error) { next(error); }
};
