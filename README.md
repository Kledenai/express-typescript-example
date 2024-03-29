## Express Typescript Example

A simple express api using typescript

### Getting started

First of all you need to install all the dependencies that the project needs to run, for that run the command below:

```bash
yarn install
```

Feel free to use npm too, I'm putting yarn here because it was the package manager I used when developing the project.

Now the command below is for you to run the project under development:

```bash
yarn run dev
```

it is necessary to set an `.env` file that will contain the **PORT** variable that the service will use, if not set it will run on `3333`.

And to finish the command so you can build the application and convert everything to javascript is the command below:

```bash
yarn run build
```

## Available Routes

Routes

| Routes       | Description              | Methods HTTP |
| ------------ | ------------------------ | ------------ |
| /project     | Obtain list of projects. | GET          |
| /project     | Create a new project.    | POST         |
| /project/:id | Show a unique project.   | GET          |
| /project/:id | Update a unique project. | PATCH        |
| /project/:id | Delete a unique project. | DELETE       |

[to access the documentation of this api, enter this link](https://documenter.getpostman.com/view/9428727/2s9Y5YTNmA)
