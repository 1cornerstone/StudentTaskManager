
// create
//update
//delete
//read all tasks

const Student = require('../models/student');

module.exports = {

   getTasks :  async ( req,res) =>{
        const  tasks = await Student.find({});
        res.send(tasks);
    },

   createTask :  async (req,res)=>{
        const  student = new Student(req.body);
        try {
            await student.save();
            res.send("saved");
        }catch (e) {
            res.status(500).send(Object.keys(e.keyValue)+' must be unique');
        }



   }  ,

    updateTask : async (req,res)=>{

   } ,
     deleteTask : async (req,res)=>{

   } ,
    getPendingTask : async (req,res)=>{

   } ,
  getDoneTask : async (req,res)=>{

   } ,


};



