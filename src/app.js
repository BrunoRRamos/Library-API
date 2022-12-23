import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js"
import routes from "./routes/index.js";

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

//Direciona para a rota correta
routes(app);

//GET de um livro pelo ID
app.get('/books/:id', (req, res) => {
    const id = req.body.id;
    books.findById((err, books) => {
        res.status(200).json(books[id]);
    })
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

export default app;