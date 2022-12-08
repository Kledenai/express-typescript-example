import express from 'express';
import Project from './interfaces/project';
import Controller from './interfaces/controller';
import errorMiddleware from './middleware/errorMiddleware';

class App {
	public app: express.Application;

	constructor(controllers: Controller[]) {
		this.app = express();

    this.initializeProjectList();
		this.initializeMiddlewares();
		this.initializeControllers(controllers);
    this.initializeErrorHandling();
	}

  public listen() {
		this.app.listen(process.env.PORT || 3333, () => {
      console.log(`App listening on the port ${process.env.PORT || 3333}`)
		})
	}

  public getServer() {
    return this.app;
  }

  private initializeProjectList() {
    const projects: Project[] = []

    this.app.set('projects', projects);
  }

	private initializeMiddlewares() {
		this.app.use(express.json())
	}

  private initializeErrorHandling() {
    this.app.use(errorMiddleware)
  }

	private initializeControllers(controllers: Controller[]) {
		controllers.forEach((controller) => {
        this.app.use('/', controller.router);
    });
	}
}

export default App;
