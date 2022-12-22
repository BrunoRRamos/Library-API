import express from "express";

//Instancia o Express
const app = express();

//Faz com que o app interprete arquivos .JASON
app.use(express.json());

const books = [
    {id: 1, "Title": "Clean Code"},
    {id: 2, "Title": "Software Codes"}
]

//Cada rota tem seu GET
//GET para página inicial
app.get('/', (req, res) => {
    res.status(200).send("Batata");
});

//GET para a relação de livros cadastrados
app.get('/books', (req, res) => {
    res.status(200).json(books);
})

//POST para criar um novo Livro
app.post('/books', (req, res) => {
    books.push(req.body);
    //Status 201 de POST realizado
    res.status(201).send("POST Sucess")
});

export default app;