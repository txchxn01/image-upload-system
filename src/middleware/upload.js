const multer = require('multer');
const imageFilter = (res,file,cb)=>{
    if( file.mimetype.startsWith("image") ) {
        cb(null,true);
    }else{
        cd("Please upload only images",false);
    }
}

let storage = multer.diskStorage({
    destination: (req,file,cd)=>{
        cd(null,__basedir + "/resources/static/assets/uploads");
    },
    filename:(req,file,cd)=>{
        cb(null,`${Date.now()}-image-${file.originalname}`);
    }
})

let uploadFiles = multer({storage: storage,fileFilter: imageFilter});

module.exports = uploadFiles;