const mongoose = require('mongoose')
const config = require('../config/config');

mongoose.connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
