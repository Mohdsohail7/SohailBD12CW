let express = require("express");
let app = express();
let port = 8000;

// Question 1:
// Create an endpoint that takes distance1 and distance2 as query parameters and returns the total distance covered by adding two trips.
app.get('/total-distance', (req, res) => {
  let distance1 = parseFloat(req.query.distance1);
  let distance2 = parseFloat(req.query.distance2);

  let totalDistance = distance1 + distance2;
  res.send(totalDistance.toString());
});

// Question 2:
//Create an endpoint that takes time1, time2, and time3 as query parameters and returns the total time spent on multiple activities.
app.get('/total-time', (req, res) => {
  let time1 = parseFloat(req.query.time1);
  let time2 = parseFloat(req.query.time2);
  let time3 = parseFloat(req.query.time3);

  let totalTime = time1 + time2 + time3;
  res.send(totalTime.toString());
});

// Question 3:
// Create an endpoint that takes totalDistance and totalTime as query parameters and returns the average speed.
app.get('/average-speed', (req, res) => {
  let totalDistance = parseFloat(req.query.totalDistance);
  let totalTime = parseFloat(req.query.totalTime);

  let averageSpeed = totalDistance / totalTime;
  res.send(averageSpeed.toString());
});

// Question 4:
// Create an endpoint that takes distance and speed as query parameters and returns the estimated time of arrival (ETA).
app.get('/eta', (req, res) => {
  let distance = parseFloat(req.query.distance);
  let speed = parseFloat(req.query.speed);

  let eta = distance / speed;
  res.send(eta.toString());
})

// Question 5:
// Create an endpoint that takes duration1, duration2, and caloriesPerMinute as query parameters and returns the total calories burned based on activity duration and calories burned per minute.
app.get('/total-calories', (req, res) => {
  let duration1 = parseFloat(req.query.duration1);
  let duration2 = parseFloat(req.query.duration2);
  let caloriesPerMinute = parseFloat(req.query.caloriesPerMinute);

  let totalCaloriesBurned = (duration1 + duration2) * caloriesPerMinute;
  res.send(totalCaloriesBurned.toString());
});

// Question 6:
// Create an endpoint that takes principal, rate, and time as query parameters and returns the interest earned on a savings account.
app.get('/interest-earned', (req, res) => {
  let principal = parseFloat(req.query.principal);
  let rate = parseFloat(req.query.rate);
  let time = parseFloat(req.query.time);

  let totalInterest = (principal * rate * time) / 100;
  res.send(totalInterest.toString());
});
// server start here
app.listen(port, () => {
  console.log("Server is running on port number :", port);
});