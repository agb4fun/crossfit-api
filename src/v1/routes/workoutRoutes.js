const express = require('express')
const router = express.Router();
const workoutController = require("../../controllers/workoutController")



router
  .get('/', workoutController.getWorkouts)
  
  .get("/:workoutId", workoutController.getWorkout)

  .post("/:workoutId", workoutController.createWorkout)

  .patch("/:workoutId", workoutController.updateWorkout)

  .delete("/:workoutId", workoutController.deleteWorkout)

module.exports = router;

  