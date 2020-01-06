
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const db = require('./config/db');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const swaggerDefinition = {
  info: {
    title: 'Node Api and MongoDb with Sawagger Documentaion ',
    version: '1.0.0',
    description: 'Endpoints to test the user registration routes',
  },
  host: `localhost:${port}`,
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ['routes/*/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);
app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, false, { validatorUrl: null }));
app.get('/',(req, res, next) => {
  res.send('<h2>Node Api and MongoDb With Swagger doc => <a href="/api-docs">/api-docs</a></h2>');
});
const todo = require('./routes/todo')

app.use('/todo', todo);



const server = http.createServer(app);



server.listen(port, ()=> {
    db.connect(() => {})
    console.log(`server are listen http://localhost:${port}`);
});






