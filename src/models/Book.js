import mongoose from "mongoose";

//Cria um modelo de documento no Banco
const bookShema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    author: {type: String, required: true},
    publishCompany: {type: String, required: true},
    numPages: {type: Number}
});

//Cria o modelo a ser instanciado
const books = mongoose.model("books", bookShema);

export default books;