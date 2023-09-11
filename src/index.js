const express = require('express');
const app = express();
const v1workoutRouter = require('./v1/routes/workoutRoutes');

const PORT = process.env.PORT || 3000;

app.use('/api/v1/workouts', v1workoutRouter);

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`)
});