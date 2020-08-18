const { uuid } = require('uuidv4');

module.exports = {
  async index (request, response) {
    const projects = request.app.get('projects');

    return response.json(projects);
  },

  async store (request, response) {
    const { title, owner } = request.body;

    const projects = request.app.get('projects');

    const project = { id: uuid(), title, owner };

    projects.push(project);

    return response.json(project);
  },

  async show (request, response) {
    const { id } = request.params;

    const projects = request.app.get('projects');

    const project = projects.find(project => project.id === id);

    if (project < 0) {
      return response.status(400).json({ message: 'Project not found.'})
    }

    return response.json(project)
  },

  async update(request, response) {
    const { id } = request.params;
    const { title, owner } = request.body;

    const projects = request.app.get('projects');

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
      return response.status(400).json({ message: 'Project not found.' });
    }

    const project = {
      id,
      title,
      owner,
    };

    projects[projectIndex] = project;

    return response.json(project)
  },

  async delete (request, response) {
    const { id } = request.params;

    const projects = request.app.get('projects');

    const projectIndex = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
      return response.status(400).json({ message: 'Project not found.' });
    }

    projects.splice(projectIndex, 1);

    return response.json({ message: 'Project deleted successfuly'});
  }
}
