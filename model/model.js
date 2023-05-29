const { call } = require('function-bind');
let client = require('../dbConnection');
let collection = client.db('test').collection('Projects');

const insertProjects = (project, callback) => {
    collection.insertOne(project, callback);
}

const getProjects = (callback) => {
    collection.find({}).toArray(callback);
}

const remove = (project,callback) => {
    collection.deleteOne(project,callback);
}

const updateLastProject = (updateData, callback) => {
    collection.find().sort({ _id: -1 }).limit(1).toArray((err, docs) => {
        if (err) {
            callback(err);
        } else if (docs.length > 0) {
            const lastProject = docs[0];
            collection.updateOne({ _id: lastProject._id }, { $set: updateData }, callback);
        } else {
            callback(new Error("No projects"));
        }
    });
}

module.exports = {insertProjects, getProjects, remove, updateLastProject}