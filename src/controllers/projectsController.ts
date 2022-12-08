import { v4 as uuidv4 } from 'uuid'
import * as express from 'express'
import Project from '../interfaces/project'

class ProjectsController {
  public path = '/projects';
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.index);
    this.router.post(this.path, this.store);
  }

  index = async (request: express.Request, response: express.Response) => {
    const title : any = request.query.title;

    const projects : Project[] = request.app.get('projects')

    const result = title
      ? projects.filter(project => project.title.includes(title))
      : projects;

    response.send(result)
  }

  store = (request: express.Request, response: express.Response) => {
    const project: Project = request.body;

    console.log(uuidv4())

    request.app.get('projects').push(project);
    response.send(project);
  }
}

export default ProjectsController;

