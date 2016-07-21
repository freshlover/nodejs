var student = require('./student');
var teacher = require('./teacher');

//teacher.add('Scott');

function add(teacherName, students)
{
    teacher.add(teacherName);

    students.forEach(function(item, index){
        student.add(item);
    })
}

//add('Scott',['白富美','高富帅']);

//exports =  add;
module.exports =  add;