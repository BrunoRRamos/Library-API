import books from "../models/Book.js";

//Cria os métodos referentes a livro
class BookController {
    //Implementa GET dos Livros
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        });
    }

    //Implementa POST de um livro
    static createBook = (req, res) => {
        let book = new books(req.body)
        book.save((err) => {
            err ? res.status(500).send(`Message: ${err.message} - POST error`) : res.status(201).send(`POST Sucess`)
        });
    }
}

export default BookController;