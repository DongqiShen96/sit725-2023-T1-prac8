let model = require('../model/model')

const createProjects = (req, res) => {
    let newProject = req.body;
    model.insertProjects(newProject, (error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error });
        } else {
            res.json({ statusCode: 200, data: result, message: 'project successfully added' });
        }
    });
}

const getAllProjects = (req, res) => {
    model.getProjects((error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Success' });
        }
    });
}

const deleteProject= (req, res) => {
    let project = req.body;
    model.remove(project,(error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Successfully removed' });
        }
    });
}

const updateLastProject = (req, res) => {
    let updateData = req.body;
    model.updateLastProject(updateData, (error, result) => {
        if (error) {
            res.json({ statusCode: 400, message: error.message });
        } else {
            res.json({ statusCode: 200, data: result, message: 'Last project successfully updated' });
        }
    });
}

module.exports = {createProjects, getAllProjects, deleteProject, updateLastProject};