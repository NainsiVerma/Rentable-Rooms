const mongoose = require('mongoose');

const url = 'mongodb+srv://nainsi:nv1234@cluster0.70klgit.mongodb.net/rentablerooms?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;