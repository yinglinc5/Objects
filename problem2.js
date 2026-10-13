const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];



function createStudent(name, grade, gpa) {
const student = {
  name: "name:", 
  grade: "grade:",
  gpa: "gpa:",
  Honors: gpa >= 3.5
}
student.name = name
student.grade = grade
console.log(student.Honors);
console.log(student.grade);
console.log(student.name);
}

createStudent("alex", 11, 3.8);
 // TODO: return an object with 
 // name, grade, gpa, and isHonors