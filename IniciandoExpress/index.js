const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("Bem vindo ao meu site!");
});

app.get("/blog/:article?", function(request, response) {
  var article = request.params.article;

  if(article) { return response.send("Artigo: " + article) }

  response.send("Bem vindo ao blog!");
});

app.get("/channel/videos", function(request, response) {
  var channel = request.query["channel"];

  if(channel) { return response.send("Canal: " + channel) }

  response.send("Canal não fornecido...");
});

app.listen(4000, function(error) {
  if(error) { return console.log(error) }

  console.log("Servidor iniciado com sucesso...");
});
