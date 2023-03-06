import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

//Cria um modelo de documento no Banco
const bookShema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    author: {type: mongoose.Schema.Types.ObjectId, ref: "authors" ,required: true},
    publishCompany: {type: mongoose.Schema.Types.ObjectId, ref: "publishCompany", required: true},
    numPages: {type: Number}
});

//Cria o modelo a ser instanciado
const books = mongoose.model("books", bookShema);

export default books;