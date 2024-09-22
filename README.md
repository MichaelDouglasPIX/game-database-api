
# <center>🎮 Game Database API</center>

<center>Rest API project to record and make data available about developed games.</center>

&nbsp;&nbsp;&nbsp;

<p align="center">
  <img src="docs/data_modeling.png" width="500"/>
</p>

## Technologies
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [Mongodb](https://www.mongodb.com/pt-br/docs/manual/)
- [Swagger](https://swagger.io/docs/specification/basic-structure/)

## Prerequisites
To run the project, you must install the following tools on your machine:
- [Node.js](https://nodejs.org/en): v18 or higher.
- [Docker](https://docs.docker.com/get-started/)

## Installation
Clone the repository to your computer
```
git clone https://github.com/MichaelDouglasPIX/game-database-api.git
```

Access the project
```
cd game-database-api
```

Install dependencies
```
npm i
```
## Run project locally

> [!IMPORTANT]
> Rename the `.env_example` into  `.env` and change the username and password fields. 

Start Docker containers
```
npm run start-docker
```

Start the server
```
npm run dev
```

Terminate Docker
```
npm run finish-docker
```

### Swagger and Mongo Express
After docker and server are running, it is possible to view some services.

- Visit `http://localhost:8082/` to view API documentation in Swagger UI.
- Visit `http://localhost:8081/` to view the automatically generated data in mongodb.

## License

[MIT licensed](LICENSE).





