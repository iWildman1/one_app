const mongoose = require('mongoose');
const config = require('../config/database');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    iteration: {
        type: Number,
        required: true
    },
    deployment_date: {
        type: Date,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    owner_pretty: {
        type: String,
        required: true
    },
    github_file: {
        type: String,
        required: true
    },
    ftp_server: {
        type: String,
        required: true
    },
    ftp_port: {
        type: Number,
        required: true
    },
    ftp_username: {
        type: String,
        required: true
    },
    ftp_password: {
        type: String,
        required: true
    }
});

const Project = module.exports = mongoose.model('Project', ProjectSchema);

module.exports.getProjectById = function(id, callback) {
    Project.findById(id, callback);
}

module.exports.getProjectsByOwner = function(username, callback) {
    const query = {
        owner: username
    };

    Project.find(query, callback).sort({'deployment_date': -1});
}

module.exports.addProject = function(projectData, callback) {
    projectData.save(callback);
}

module.exports.updateProject = function(id, newProjectData, callback) {
    Project.findOne({_id: id}, function(err, data) {
        if (err) throw err;


        data.name = newProjectData.name;
        data.iteration = newProjectData.iteration;
        data.deployment_date = newProjectData.deployment_date;
        data.owner = newProjectData.owner;
        data.owner_pretty = newProjectData.owner_pretty;
        data.github_file = newProjectData.github_file;
        data.ftp_server = newProjectData.ftp_server;
        data.ftp_port = newProjectData.ftp_port;
        data.ftp_username = newProjectData.ftp_username;
        data.ftp_password = newProjectData.ftp_password;

        data.save(callback);
    })
}

module.exports.deleteProject = function(id, callback) {
    Project.findOne({_id: id}, function(err, data) {
        if (err) throw err;

        data.remove(callback);
    })
}