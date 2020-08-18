const express = require('express');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();

routes.get('/projects', ProjectController.index);
routes.post('/projects/create', ProjectController.store);
routes.put('/projects/update/:id', ProjectController.update);
routes.delete('/projects/delete/:id', ProjectController.delete);

module.exports = routes;
