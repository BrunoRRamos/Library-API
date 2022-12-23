import express from "express";
import BookController from "../controllers/booksController.js";

//Inicia o roteamento do express
const router = express.Router();

//Cria a rota GET para /books
router
    .get("/books", BookController.listBooks)

export default router;