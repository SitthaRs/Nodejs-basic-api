const mongoose = require('mongoose')

const options = {
    dbName: process.env.MONGODB_DBNAME,
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASSWORD,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}

mongoose.connect(process.env.MONGODB_URL, options, function(error) {
    if(error)
        console.log(error)
})
