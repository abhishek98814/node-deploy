const express = require('express')
const userController = require('../controller/user')

const router = express.Router()

router
    .post('/', userController.createUser)
    .get('/:id', userController.getUser)
    .get('/', userController.getAllUser)
    .put('/:id', userController.replaceUser)
    .patch('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)

exports.router = router
