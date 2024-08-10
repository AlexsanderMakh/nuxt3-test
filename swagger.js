const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require("express");
const app = express();

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Profile API",
    version: "1.0.0",
    description: "API for fetching user profile data",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local server",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./server/api/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
