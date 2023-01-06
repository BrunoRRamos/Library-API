import express from "express";
import BookController from "../controllers/booksController.js";

//Inicia o roteamento do express
const router = express.Router();
//ATENÇÃO: Primeiro as rotas menos específicas (query), depois as específicas (Id)
//Parâmetros de query são separasdos por um & e podem ser String, Arrays e Numbers.

//Cria GET para a rota /books
//Cria POST para a rota /books
//Cria PUT para a rota /books/:id
router
    .get("/books", BookController.listBooks)
    .get("/books/search", BookController.listBooksByCompany)
    .get("/books/:id", BookController.getById)
    .post("/books", BookController.createBook)
    .put("/books/:id", BookController.updateBook)
    .delete("/books/:id", BookController.deleteBook)

export default router;