import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js"

//Conecta o log do banco com o terminal
db.on("error", console.log.bind(console, "Erro de conexão"));

//Inicia a conexão com o banco
db.once("open", () => {
    console.log("Connected to DataBase")
});

//Instancia o Express
const app = express();

//Faz com que o app interprete arquivos .JASON
app.use(express.json());

//const books = [
//   {id: 1, "Title": "Clean Code"},
//   {id: 2, "Title": "Software Codes"}
//]

//Cada rota tem seu GET
//GET para página inicial
app.get('/', (req, res) => {
    res.status(200).send("Batata");
});

//GET para a relação dos livros cadastrados
app.get('/books', (req, res) => {
    books.find((err, books) => {
        res.status(200).json(books);
    })
});

//GET de um livro pelo ID
app.get('/books/:id', (req, res) => {
    let index = searchId(req.params.id)
    res.status(200).json(books[index]);
});

//POST para criar um novo Livro
app.post('/books', (req, res) => {
    books.push(req.body);
    //Status 201 de POST realizado
    res.status(201).send("POST Sucess")
});

//PUT atualiza o título de um livro já cadastrado (pelo ID)
app.put('/books/:id', (req, res) => {
    let index = searchId(req.params.id);
    books[index].Title = req.body.Title;
    res.json(books);
});

//DELETE remove um livro oelo ID dele
app.delete('/books/:id', (req, res) => {
    let {id} = req.params;
    let index = searchId(id);
    books.pop(index);
    res.send(`Book ${id} removed !`);
});

function searchId(id) {
    return books.findIndex(book => book.id == id);
}

export default app;