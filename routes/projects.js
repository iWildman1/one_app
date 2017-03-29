const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Project = require('../models/project');

router.post('/create', (req, res) => {
    let projectData = new Project({
        name: req.body.name,
        iteration: req.body.iteration,
        deployment_date: req.body.deployment_date,
        owner: req.body.owner,
        owner_pretty: req.body.owner_pretty,
        github_file: req.body.github_file,
        ftp_server: req.body.ftp_server,
        ftp_port: req.body.ftp_port,
        ftp_username: req.body.ftp_username,
        ftp_password: req.body.ftp_password
    });

    Project.addProject(projectData, (err, project) => {
        if (err) {
            res.json({
                success: false,
                message: 'Unable to save project. Please try again later.'
            })
        } else {
            res.json({
                success: true,
                message: 'Succesfully saved project'
            })
        }
    })
})

router.get('/find/:username', (req, res) => {
    const username = req.params.username;

    Project.getProjectsByOwner(username, (err, projects) => {
        if (err) {
            res.json({
                success: false,
                message: err
            })
        } else {
            res.json({
                success: true,
                message: "Successfully found projects",
                projects: projects
            })
        }
    })
})

router.get('/find/id/:id', (req, res) => {
    const id = req.params.id;

    Project.getProjectById(id, (err, project) => {
        if (err) {
            res.json({
                success: false,
                message: 'Something went wrong with fetching the project'
            })
        } else {
            res.json({
                success: true,
                message: "Search successfully completed",
                project: project
            })
        }
    })
})

router.put('/update/:id', (req, res) => {
    let id = req.params.id;
    let projectData = {
        name: req.body.name,
        iteration: req.body.iteration,
        deployment_date: req.body.deployment_date,
        owner: req.body.owner,
        owner_pretty: req.body.owner_pretty,
        github_file: req.body.github_file,
        ftp_server: req.body.ftp_server,
        ftp_port: req.body.ftp_port,
        ftp_username: req.body.ftp_username,
        ftp_password: req.body.ftp_password
    };

    Project.updateProject(id, projectData, (err, project) => {
        if (err) {
            res.json({
                success: false,
                message: err
            })
        } else {
          res.json({
              success: true,
              message: "Successfully updated project"
          })
        }
    })
})

router.delete('/delete/:id', (req, res) => {
    let id = req.params.id;

    Project.deleteProject(id, (err) => {
        if (err) {
            res.json({
                success: false,
                message: err
            })
        } else {
            res.json({
                success: true,
                message: "Project deleted successfully"
            })
        }
    })
})

module.exports = router;
