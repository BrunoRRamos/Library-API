import mongoose from "mongoose";

//Cria a conexão com o MongoDB Atlas pela string de conexão
mongoose.connect('mongodb+srv://BrunoRRamos:Selmamaria31@cluster0.43kutav.mongodb.net/Library-PAI-Node?');

//Variável de conexão
let db = mongoose.connection;

export default db;