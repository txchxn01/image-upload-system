const express = require('express')
const router = express.Router();
const homecontroller =require("../controllers/home")
const uploadController =require("../controllers/upload")
const upload = require("../middleware/upload")

let routes = (app) =>{
    router.get("/",homecontroller.getHome);
    router.post("/upload",upload.single('file'), uploadController.uploadFiles)
    return app.use("/",router);
}

module.exports = routes;
