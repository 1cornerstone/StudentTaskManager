const mongo = require('mongoose');

const  studentSchema = new mongo.Schema({

    title : {type: String,required: true, unique:true,trim: true},
    desc: {type: String,required: true},
    status:{type:Boolean, default:false},
    dueDate :{type: Date,required: true},
    createdAt: { type: Date, default: Date.now },


});

const  student = mongo.model('students',studentSchema);
module.exports = student;

