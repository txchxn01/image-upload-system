const multer = require('multer');
const imageFilter = (res,file,cb)=>{
    if( file.mimetype.startsWith("image") ) {
        cb(null,true);
    }else{
        cb("Please upload only images",false);
    }
}

let storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,__basedir + "/resources/static/assets/uploads");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+".jpg");
    }
})

let uploadFile = multer({storage: storage,fileFilter: imageFilter});

module.exports = uploadFile;