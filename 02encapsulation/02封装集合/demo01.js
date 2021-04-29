const Person = require('./person')
const Course = require('./course')

let peter = Person.createPerson("皮特");

peter.addCourse(Course.createCourse("数学课", false));
peter.addCourse(Course.createCourse("语文课", false));
peter.addCourse(Course.createCourse("科学课", true));
console.log(peter);
