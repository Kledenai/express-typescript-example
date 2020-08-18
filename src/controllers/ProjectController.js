module.exports = {
  async index(request, response) {
    return response.json([
      'project 1'
    ])
  },

  async store(request, response) {
    return response.json([
      'Project 1',
      'Project 2'
    ])
  },

  async update(request, response) {
    return response.json([
      'Project 4',
      'Project 2',
      'Project 3'
    ])
  },

  async delete(request, response) {
    return response.json([
      'Project 2',
      'Project 3'
    ])
  }
}
