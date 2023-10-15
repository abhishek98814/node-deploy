
require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const morgan = require('morgan');
const cors = require('cors')
const { get } = require('https');
const path = require('path')
const server = express()
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
console.log('env', process.env_DB_PASSWORD)


// DB CONNECTION


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DataBase Connected")
}







server.use(cors())
server.use(express.json())
server.use(morgan('default'))
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)))
server.use('/products', productRouter.router)
server.use('/users', userRouter.router)
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

server.listen(process.env.PORT, () => {
    console.log("Server is running")
})

