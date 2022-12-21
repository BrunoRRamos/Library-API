//Importa a Lib http
const http = require("http")

//Cria uma porta para o Server ouvir
const port = 3000;

//Cria as possiveis rotas do Server
const routes = {
    '/': 'Batata',
    '/books': 'Sucess',
    '/authors': 'Sucess - Author'
}

//Cria o servidor com req (requisição) e res (resposta) de acordo com a url
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end(routes[req.url]);
});

//Inicia o servidor
server.listen(port, () => {
    console.log(`Server listening: http://localhost:${port}`)
});