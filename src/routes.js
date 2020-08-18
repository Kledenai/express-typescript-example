const express = require('express');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();

routes.get('/projects', ProjectController.index);

module.exports = routes;
