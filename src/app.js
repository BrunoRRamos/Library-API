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

export default app;