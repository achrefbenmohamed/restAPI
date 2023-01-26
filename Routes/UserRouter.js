const express = require('express')
const { AddUser, ListUsers, DeleteUser, UpdateUser, UserDet } = require('../Contollers/User')

const UserRouter = express.Router()

UserRouter.post('/AddUser', AddUser)

UserRouter.get('/UsersList', ListUsers)

UserRouter.delete('/deleteUser/:id', DeleteUser)

UserRouter.put('/UserUpdate/:id', UpdateUser)

UserRouter.get('/UserProfile/:id', UserDet)

module.exports = UserRouter