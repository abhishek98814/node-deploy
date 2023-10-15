const fs = require('fs')
const model = require('../model/product')
const Product = model.Product;






exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        console.log(savedProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};




exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

exports.getProducts = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id)
    res.json(product)
}

exports.replaceProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const doc = await Product.findOneAndReplace({ _id: id }, req.body, { new: true })
        res.status(202).json(doc)
    }
    catch (err) {
        console.log(err)
        res.status(202).json(err)
    }
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const doc = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        res.status(202).json(doc)
    }
    catch (err) {
        console.log(err)
        res.status(202).json(err)
    }
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const doc = await Product.findOneAndDelete({ _id: id })
        res.status(202).json(doc)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}