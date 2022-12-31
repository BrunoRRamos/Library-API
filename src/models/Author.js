import mongoose from "mongoose";

const AuthorShema = new mongoose.Schema(
    {
    id: {type: String},
    name: {type: String, required: true},
    nacionality: {type: String}
    },
    {
    versionKey: false
    }
);

const authors = mongoose.model("authors", AuthorShema);

export default authors;