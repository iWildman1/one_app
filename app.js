const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to MongoDB
mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log("Connected successfully to mongodb at " + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log("Error connecting to mongodb. Error message - " + err);
});

//Set up Express application
const app = express();

//Import Routes Files
const users = require('./routes/users');
const projects = require('./routes/projects');

//Set up port variable
const port = process.env.PORT || 8080;

//Allow CORS
app.use(cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//Use Body Parser
app.use(bodyParser.json());

//Use Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Use Routes
app.use("/users", users);
app.use("/projects", projects);

//Index Endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start server
app.listen(port, () => {
    console.log("Server started on port " + port);
})