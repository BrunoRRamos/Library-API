import books from "../models/Book.js";

//Cria os métodos referentes a livro
class BookController {

    //Implementa GET dos Livros
    //Composição de documentos
    static listBooks = (req, res) => {
        books.find()
        //Populate busca a referencia para o Documento 
        .populate("author")
        //Execute executa o bloco de código da resposta
        .exec((err, books) => {
            res.status(200).json(books);
        });
    }

    //Implementa o GET pelo ID
    static getById = (req, res) => {
        const id = req.params.id;
        books.findById(id)
        .populate("author", "name")
        .exec((err, books) => {
            err ? res.status(400).send({message: `${err.message} - Book Not Found - Invalid ID`}) : res.status(200).send(books);
        });
    }

    //Implementa POST de um livro
    static createBook = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
            err ? res.status(500).send(`Message: ${err.message} - POST error`) : res.status(201).send(`Sucess POST`)
        });
    }

    //Implementa PUT de um livro
    static updateBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            !err ? res.status(200).send('Sucess PUT') : res.status(500).send({message: `${err.message} - PUT error`})
        });
    }

    //Implementa DELETE de um livro
    static deleteBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndDelete(id, (err) => {
            err ? res.status(500).send(`Message: ${err.message} - DELETE error`) : res.status(200).send(`Sucess DELETE`)
        });
    }

    //Lista Livros pela Editora
    static listBooksByCompany = (req, res) => {
        const publishCompany = req.query.publishCompany;
        books.find({"publishCompany": publishCompany}, {}, (err, books) => {
            res.status(200).send(books)
        });
    }

}

export default BookController;