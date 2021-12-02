const Router = require('express').Router();

const apiRoutes = require('./api.js');
const htmlRoutes = require('./htmlDir.js');

Router.use(apiRoutes);
Router.use(htmlRoutes);

module.exports = Router;