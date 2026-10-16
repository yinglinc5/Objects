const students = [
  { name: "Jane",    grade: 11, gpa: 3.8, isHonors: true  },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota",  grade: 10, gpa: 3.9, isHonors: true  }
];

function findByName(students, targetName){
    const found = students.find((students) => students.name === targetName);
    if(found){
        return found;
    }
    else{
        return null;
    }
}
console.log(findByName(students, "ChenZee"));