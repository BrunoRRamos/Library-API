import publishCompanies from "../models/PublishCompany.js";

class PublishCompanyController {

    static listPublishCompany = (rec, res) => {
        publishCompanies.find((err, publishCompany) => {
            res.status(200).json(publishCompany);
        });
    }

    static getPublishCompanyByid = (req, res) => {
        const id = req.params.id;
        publishCompanies.findById(id, (err, publishCompany) => {
            err ? res.status(400).send({Message: `${err.Message} - Publish Company Not Found - Invalid ID`}) : res.status(200).send(publishCompany);
        });
    }

    static createPublishCompany = (req, res) => {
        let publishCompany = new publishCompanies(req.body);
        publishCompany.save((err) => {
            err ? res.status(500).send({Message: `${err.Message} - POST error`}) : res.status(201).send('Sucess POST');
        });
    }

    static updatePublishCompany = (req, res) => {
        const id = req.params.id;
        publishCompanies.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            err ? res.status(500).send({Mesage: `${err.Mesage} - PUT error`}) : res.status(200).send('Sucess PUT');
        });
    }

    static deletePublishCompany = (req, res) => {
        const id = req.params.id;
        publishCompanies.findByIdAndDelete(id, (err) => {
            err ? res.status(500).send(`Message: ${err.message} - DELETE error`) : res.status(200).send(`Sucess DELETE`);
        });
    }
}

export default PublishCompanyController;