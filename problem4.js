const students = [
  { name: "Jane",    grade: 11, gpa: 3.8, isHonors: true  },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota",  grade: 10, gpa: 3.9, isHonors: true  }
];

function printRoster(students){
  
students.forEach((students) => {if(students.isHonors === true){
     console.log(`[Grade ${students.grade}] ${students.name} - GPA: ${students.gpa} ★`);
} else{
    console.log(`[Grade ${students.grade}] ${students.name} - GPA: ${students.gpa}`);

}
})
}

console.log(printRoster(students));