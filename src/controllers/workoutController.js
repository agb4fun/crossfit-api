const workoutService = require("../services/workoutService");


const getWorkouts = (req, res) => {
  const Workouts = workoutService.getAllWorkouts();
  res.send("Get all workouts")
};

const getWorkout = (req, res) => {
  const workout = workoutService.getWorkout(req.params.workoutId)
  res.send(`Get worktout ${req.params.workoutId}`)
}

const createWorkout = (req, res) => {
  const createdWorkout = workoutService.createWorkout(req.params.workoutId)
  res.send(`Get workout ${req.params.workoutId}`)
}

const updateWorkout = (req, res) => {
  const updatedWorkout = workoutService.createWorkout(req.params.workoutId)
  res.send(`Update a workout ${req.params.workoutId}`)
}

const deleteWorkout = (req, res) => {
  workoutService.createdWorkout(req.params.workoutId)
  res.send(`Delete a worktout ${req.params.workoutId}`)
}

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
}