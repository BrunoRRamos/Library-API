//Importa biblioteca que conecta a aplicação ao banco de dados
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const DBSTRING = process.env.DBSTRINGCONNECT;
//Cria a conexão com o MongoDB Atlas pela string de conexão
mongoose.connect(`${DBSTRING}`);

//Variável de conexão
let db = mongoose.connection;

export default db;