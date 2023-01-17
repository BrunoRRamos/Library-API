import authors from "../models/Author.js";

class AuthorController {

    static listAuthors = (req, res) => {
        authors.find((err, author) => {
            res.status(200).json(author);
        });
    }

    static getAuthorById = (req, res) => {
        const id = req.params.id;
        authors.findById(id, (err, author) => {
            err ? res.status(400).send({Message: `${err.Message} - Author Not Found - Invalid ID`}) : res.status(200).send(author);
        });
    }

    static createAuthor = (req, res) => {
        let author = new authors(req.body);
        author.save((err) => {
            err ? res.status(500).send(`Message: ${err.message} - POST error`) : res.status(201).send(`Sucess POST`);
        });
    }

    static updateAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            !err ? res.status(200).send('Sucess PUT') : res.status(500).send({message: `${err.message} - PUT error`});
        });
    }

    static deleteAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndDelete(id, (err) => {
            err ? res.status(500).send(`Message: ${err.message} - DELETE error`) : res.status(200).send(`Sucess DELETE`);
        });
    }
}

export default AuthorController