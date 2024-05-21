import express from "express";
import axios from "axios";
console.clear();
const app = express();
const PORT = 3005;
app.use(express.json());
const events = [];

app.get("/events", (req, res) => {
  res.send(events);
});
app.post("/events", (req, res) => {
  const event = req.body;
  events.push(event);
  axios
    .post("http://localhost:3000/events", event)
    .catch((err) => console.log("Post", err));
  axios
    .post("http://localhost:3001/events", event)
    .catch((err) => console.log("Comments", err));
  axios
    .post("http://localhost:3002/events", event)
    .catch((err) => console.log("Query", err));
  res.send({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Event bus is running on port ${PORT}`);
});
