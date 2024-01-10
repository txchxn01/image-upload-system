const fs = require("fs")
const db = require('../models');
const Image = db.images;
const uploadFile =async(req,res)=>{
    try{
        console.log(req.file);

        if (req.file == undefined){
            return res.send("You must select a file")

        }

        Image.creat({
            type: req.file.mimetype,
            name:req.file.originalname,
            data: fs.readFileSync(
                __basedir + "/resoures/static/assets/uploads"+req.file.filename
            )
        }).the((image)=>{
            fs.writeFileSync(
                __basedir + "/resoures/static/assets/temp"+image.name,image.data
            )
            return res.send('File has been uploaded');
        })
    } catch(error){
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
    
    }
}

module.exports = {
    uploadFile
}