import mongoose from "mongoose";

const publishCompanyShema = new mongoose.Schema(
    {
    id: {type: String},
    name: {type: String, required: true},
    nacionality: {type: String, required: true}
    },
    {
    versionKey: false
    }
);

const publishCompanies = mongoose.model("publishCompany", publishCompanyShema);

export default publishCompanies;