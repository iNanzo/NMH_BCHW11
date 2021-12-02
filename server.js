// Requires
const express = require('express');
const routes = require('./routes/routes.js')

// Port
const PORT = process.env.PORT || 3001;

// Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);