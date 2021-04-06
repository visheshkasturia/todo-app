//Set up connection with MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task_list_db', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Mongoose : we're connected!")
});