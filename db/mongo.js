
const  mongoose = require('mongoose');

let uri = "mongodb+srv://studentTask:students@cluster0.5z39m.mongodb.net/studentTasks?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB connected")
});

module.exports.mongo= db;

