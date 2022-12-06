const express = require("express");
const router = express.Router();
const { createTasks,deleteTasks,getAllTasks,getTasks,updateTasks } = require("../controllers/tasks");

router.get("/", getAllTasks);
router.post("/", createTasks);
router.get("/:id", getTasks);
router.patch("/:id", updateTasks);
router.delete("/:id", deleteTasks);

module.exports = router;
