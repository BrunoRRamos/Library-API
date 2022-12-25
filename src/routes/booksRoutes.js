import express from "express";
import BookController from "../controllers/booksController.js";

//Inicia o roteamento do express
const router = express.Router();

//Cria GET para a rota /books
//Cria POST para a rota/books
router
    .get("/books", BookController.listBooks)
    .post("/books", BookController.createBook)

export default router;