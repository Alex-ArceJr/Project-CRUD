const mongoose = require('mongoose');

//connect to the database
mongoose.connect(process.env.DATABASE_URL);

// setup a shortcut variable to connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to mongoDB ${db.name} on ${db.host} port: ${db.port}`)
})

//register a listener for connected events
