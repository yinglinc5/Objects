
function createStudent(name, grade, gpa) {
const student = {
  name: name, 
  grade: grade,
  gpa: gpa,
  Honors: gpa >= 3.5
}
console.log(student.name, student.grade, student.gpa, student.Honors);
}

createStudent("alex", 11, 3.8);
 // TODO: return an object with 
 // name, grade, gpa, and isHonors