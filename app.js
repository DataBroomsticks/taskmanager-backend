const express = require("express");

const app = express();
const port = 3000;

app.get("/api/v1/tasks", (req, res) => {});
app.get("/api/v1/tasks", (req, res) => {});
app.get("/api/v1/tasks/:id", (req, res) => {});
app.patch("/api/v1/tasks/:id", (req, res) => {});
app.delete("/api/v1/tasks", (req, res) => {});

app.listen(port, console.log("server is listening on " + port));
