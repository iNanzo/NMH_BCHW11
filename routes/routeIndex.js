//Constants
const express = require("express");
const noteRoute = require("./routeNotes.js");
const app = express();

app.use("/notes", noteRoute);

module.exports = app;