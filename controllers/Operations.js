// create
//update
//delete
//read all tasks

const Student = require('../models/student');

module.exports = {

    getTasks: async (req, res) => {
        let tasks = await Student.find({});
        res.json(tasks);
    },

    createTask: async (req, res) => {
        const student = new Student(req.body);
        try {
            await student.save();
            res.send("saved");
        } catch (e) {
            res.status(500).send(e);
        }

    },

    updateTask: async (req, res) => {

        let resp = await Student.updateOne({title: req.params.title},
            {
                $set: {status: true}
            });

        if (Object.values(resp)[1] !== 0) return res.send('Updated')

        return res.send('Nothing Changed');

    },

    deleteTask: async (req, res) => {

        await Student.updateOne({title: req.params.title},
            {
                $set: {status: true}
            });

        res.send('Delete')

    },

    getPendingTask: async (req, res) => {

        let resp = await Student.find({status: false}, {title: 1, desc: 2, _id: 0});
        res.send(resp);

    },

    getDoneTask: async (req, res) => {
        let resp = await Student.find({status: true}, {title: 1, desc: 2, _id: 0});
        res.send(resp);
    },


};



