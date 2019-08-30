const Contact = require('./contact')

Contact.methods(['get', 'post', 'put', 'delete'])
Contact.updateOptions({new: true, runValidators: true})

module.exports = Contact