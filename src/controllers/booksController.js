import books from "../models/Book.js";

//Cria os métodos referentes a livro
class BookController {
    //Implementa GET dos Livros
    static listBooks = (req, res) => {
        books.find((err, books) => {
            res.status(200).json(books);
        })
    }
}

export default BookController;