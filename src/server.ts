import dotenv from 'dotenv';
import App from './app';
import ProjectsController from './controllers/projectsController';
import validateEnv from './utils/validateEnv';

dotenv.config();
validateEnv();

const app = new App(
	[
		new ProjectsController(),
	],
);

app.listen();
