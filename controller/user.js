const fs = require('fs')

const path = require('path')
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data.json'), 'utf-8'))
const users = data.users;


exports.createUser = (req, res) => {
    users.push(req.body)
    res.json(req.body)
}

exports.getAllUser = (req, res) => {
    res.json(users)
}

exports.getUser = (req, res) => {
    const id = +req.params.id;
    const user = users.find(p => p.id === id)
    res.json(user)
}

exports.replaceUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id)
    products.splice(userIndex, 1, { ...req.body, id: id })
    res.status(202).json()
}

exports.updateUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex]
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.status(201).json()
}

exports.deleteUser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex, 1]
    users.splice(userIndex, 1)
    res.status(202).json(user)
}