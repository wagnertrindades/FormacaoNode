const http = require("http");

http.createServer(function(request, response) {
  response.end("<h1>Bem-vindo ao meu site</h1><h4>meusite.com</h4>");
}).listen(3000);

console.log("Servidor HTTP Rodando...");
