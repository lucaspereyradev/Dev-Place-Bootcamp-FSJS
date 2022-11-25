const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/crud-mongo')
    .then(() => console.log('Connection established in mongodb'))
    .catch((error) => {
        console.error(error);
    });
