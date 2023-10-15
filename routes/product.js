const express = require('express')
const productController = require('../controller/product')
const productRouter = express.Router()

const router = express.Router()

router
    .post('/', productController.createProduct)
    .get('/:id', productController.getProducts)
    .get('/', productController.getAllProducts)
    .put('/:id', productController.replaceProduct)
    .patch('/:id', productController.updateProduct)
    .delete('/:id', productController.deleteProduct)

exports.router = router
