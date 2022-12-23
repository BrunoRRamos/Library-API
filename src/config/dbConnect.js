//Importa biblioteca que conecta a aplicação ao banco de dados
import mongoose from "mongoose";

//Cria a conexão com o MongoDB Atlas pela string de conexão
mongoose.connect('mongodb+srv://BrunoRRamos:Selmamaria31@cluster0.43kutav.mongodb.net/Library-API-Node?');

//Variável de conexão
let db = mongoose.connection;

export default db;