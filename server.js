/* Constants */
// Require
const express = require("express");
const path = require("path");
const api = require("./routes/routeIndex.js");
//Express
const PORT = process.env.PORT || 3001;
const app = express();

//Use
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);
app.use(express.static("public"));

/* Routes */

//Base
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

//Notes
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);