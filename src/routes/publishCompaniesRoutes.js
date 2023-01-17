import express from "express";
import PublishCompanyController from "../controllers/publishCompanyController.js";

const router = express.Router();

router
    .get("/publishCompany", PublishCompanyController.listPublishCompany)
    .get("/publishCompany/:id", PublishCompanyController.getPublishCompanyByid)
    .post("/publishCompany", PublishCompanyController.createPublishCompany)
    .put("/publishCompany/:id", PublishCompanyController.updatePublishCompany)
    .delete("/publishCompany/:id", PublishCompanyController.deletePublishCompany)

export default router;