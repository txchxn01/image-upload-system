module.exports ={
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Tx_280525400", 
    DB:"nodejs_images",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
}