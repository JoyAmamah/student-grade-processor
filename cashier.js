const students = [
  { id: 1, name: "Alice Johnson", grades: [90, 85, 92] },
  { id: 2, name: "Bob Smith", grades: [75, 80, 72] },
  { id: 3, name: "Charlie Brown", grades: [95, 98, 94] },
  { id: 4, name: "Diana Prince", grades: [88, 90, 85] }
];

const averageGradeCalculation = (grades) => {
  const sum = grades.reduce((acc, curr) => acc + curr, 0);
  const average = sum / grades.length;
  return parseFloat(average.toFixed(2));
};

const calculateAverageGrades = (students) => {
  return students.map((item) => {
    const averageGrade = averageGradeCalculation(item.grades);
    return {
      id: item.id,
      name: item.name,
      averageGrade: averageGrade
    };
  });
};

const findTopStudent = (students) => {
  let topStudent = null;
  let highestGrade = 0;

  students.forEach((item) => {
    const averageGrade = averageGradeCalculation(item.grades);
    if (averageGrade > highestGrade) {
      highestGrade = averageGrade;
      topStudent = {
        id: item.id,
        name: item.name,
        averageGrade: averageGrade
      };
    }
  });

  console.log("Top Student:", topStudent);
};

const sortStudentsByGrade = (students) => {
  const studentsWithAverages = calculateAverageGrades(students);
  return studentsWithAverages.sort((a, b) => b.averageGrade - a.averageGrade);
};

const studentsWithAverages = calculateAverageGrades(students);
console.log("Students with Averages:");
console.table(studentsWithAverages);

findTopStudent(students);

const sorted = sortStudentsByGrade(students);
console.log("Sorted by Grade:");
console.table(sorted);
