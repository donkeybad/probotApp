// ProbotFunction/index.js
const {
    createProbot,
    createAzureFunction,
  } = require("@probot/adapter-azure-functions");
  const app = require("../index");
  console.log('The probot function is being called', app)
  module.exports = createAzureFunction(app, { probot: createProbot() });