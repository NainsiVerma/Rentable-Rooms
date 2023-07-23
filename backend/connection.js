const mongoose = require('mongoose');

const url = 'mongodb+srv://snehagupta5972:Sneha20@cluster0.kutcgpx.mongodb.net/demomern?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;