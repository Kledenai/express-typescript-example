const express = require('express');
const routes = require('./routes');

const app = express();

const projects = [];

app.set('projects', projects)

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('😳🥴👌🏻 Back-end started!')
});
