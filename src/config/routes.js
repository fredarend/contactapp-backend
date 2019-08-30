const express = require('express')

module.exports = function(server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Contacts Routes
    const contactService = require('../api/contact/contactService')
    contactService.register(router, '/contacts')
}