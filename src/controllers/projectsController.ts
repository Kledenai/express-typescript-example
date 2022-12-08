import { v4 as uuidv4 } from 'uuid'
import * as express from 'express'
import Project from '../interfaces/project'
import ProjectNotFoundException from '../exceptions/projectNotFoundException'

class ProjectsController {
  public path = '/projects'
  public router = express.Router()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.index)
    this.router.post(this.path, this.store)
    this.router.get(`${this.path}/:id`, this.show)
    this.router.patch(`${this.path}/:id`, this.update)
    this.router.delete(`${this.path}/:id`, this.delete)
  }

  index = async (request: express.Request, response: express.Response) => {
    const title : any = request.query.title

    const projects : Project[] = request.app.get('projects')

    const result = title
      ? projects.filter(project => project.title.includes(title))
      : projects

    response.send(result)
  }

  store = async (request: express.Request, response: express.Response) => {
    const data: Project = request.body

    const projects : Project[] = request.app.get('projects')

    const id = await uuidv4()

    const project = { id: id, title: data.title, owner: data.owner }

    projects.push(project)

    response.send(project)
  }

  show = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const { id } = request.params;

    const projects : Project[] = request.app.get('projects');

    const project = projects.find(project => project.id === id);

    if (project == null) {
      next(new ProjectNotFoundException(id));
    }

    return response.json(project)
  }

  update = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const { id } = request.params;
    const data : Project = request.body;

    const projects : Project[] = request.app.get('projects');

    const projectIndex : number = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
      next(new ProjectNotFoundException(id));
    }

    const project : Project = {
      id: id,
      title: data.title,
      owner: data.owner,
    };

    projects[projectIndex] = project;

    return response.json(project)
  }

  delete = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const { id } = request.params;

    const projects : Project[] = request.app.get('projects');

    const projectIndex : number = projects.findIndex(project => project.id === id);

    if (projectIndex < 0) {
      next(new ProjectNotFoundException(id));
    }

    projects.splice(projectIndex, 1);

    return response.json({ message: 'Project deleted successfuly'});
  }
}

export default ProjectsController;

