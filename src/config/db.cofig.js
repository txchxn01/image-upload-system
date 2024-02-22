module.exports ={
    HOST: "localhost",
    USER: "root",
    PASSWORD: "img1234", 
    DB:"imgg",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
}