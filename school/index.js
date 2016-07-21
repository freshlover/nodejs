var classes = require('./classes');

//classes.add('Scott',['白富美','高富帅']);

exports.add = function(classes)
{
    classes.forEach(function(item, index)
    {
        var _classes    = item;
        var teacherName = item.teacherName;
        var students    = itme.students;

        classes.add(teacherName, students);
    });
}