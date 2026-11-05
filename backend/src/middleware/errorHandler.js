exports.notFound = (req, res, next) => {
  res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
};
exports.errorHandler = (error, req, res, next) => {
  if (error.name === "ValidationError" || error.name === "CastError") {
    return res.status(400).json({ message: error.message });
  }
  console.error(error);
  res.status(500).json({ message: "Server error. Please try again." });
};
