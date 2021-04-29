const Person = require('./person')
const Course = require('./course')

let peter = Person.createPerson("皮特");

let mathCourse    = Course.createCourse("math", false);
let foreignCourse = Course.createCourse("english", false);
let scienceCourse = Course.createCourse("science", true);
let peterCourse = [];

peterCourse.push(mathCourse);
peterCourse.push(foreignCourse);
peterCourse.push(scienceCourse);

peter.courses = peterCourse;

console.log(peter);
