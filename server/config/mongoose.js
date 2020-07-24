const mongoose = require('mongoose');

module.exports = dbname => {
    mongoose.connect(`mongodb://localhost/${dbname}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true

    })
        .then(() => console.log("Established a connection to the database"))
        .catch(err => console.log("Something went wrong when connecting to the database", err));
    

}

    
