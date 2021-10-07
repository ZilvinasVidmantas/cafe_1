// Array.prototype.map
const people = [
  { name: 'Serbetautas', surname: 'Bordiuras', age: 26, salary: 2000 },
  { name: 'Jolka', surname: 'Kalėdaitė', age: 16, salary: 1600 },
  { name: 'Saulius', surname: 'Manegrūda', age: 23, salary: 2400 }
];
// 1. Create an array of fullnames based on <people> array: Array of strings
const fullnames = people.map(function (person) {
  return `${person.name} ${person.surname}`
})
const fullnames2 = people.map(({ name, surname }) => `${name} ${surname}`);

// 2. Create and array of objects, without name ar surname
const fullnameObjects1 = people.map(({ age, salary }) => ({ age, salary }));
const fullnameObjects2 = people.map(p => {
  return {
    ...p,
    name: undefined,
    surname: undefined
  };
});
const fullnameObjects3 = people.map(p => {
  const unnonymousPerson = { ...p };
  delete unnonymousPerson.name;
  delete unnonymousPerson.surname;
  return unnonymousPerson;
})
const fullnameObjects4 = people.map(({ name, surname, ...rest }) => rest);
console.log({
  fullnameObjects1,
  fullnameObjects2,
  fullnameObjects3,
  fullnameObjects4
})
// 3. Create and array of same objects, appended by a property <portion>, which value
// is a percentage of all other members salary in array;
const sumOfSalaries = people.reduce((acc, { salary }) => acc + salary, 0);
const sumOfSalaries2 = people
  .map(({ salary }) => salary) // make array of salaries
  .reduce((acc, salary) => acc + salary); // add up salaries, with no initial value
const numbersAfterComma = 2;
const peopleWithSalaryPortion = people.map(p => ({
  ...p,
  // portion:  (100 * p.salary / sumOfSalaries).toFixed(2)
  // portion:  (100 * p.salary / sumOfSalaries).toFixed(2) + "%"
  portion: Math.round(10 ** numbersAfterComma * 100 * p.salary / sumOfSalaries) / 10 ** numbersAfterComma
}));
console.table(peopleWithSalaryPortion);

// Array.prototype.filter

// 4. create an array of people, which are older than 20 years    
const peopleOlderThan20 = people.filter(({ age }) => age > 20);
// 5. create an array of people, which name is shorter than 6 letters
const peopleNameLengthMoreThan6Letters = people.filter(({ name }) => name.length < 6);
// 6. create an array of people, which surname is only from latin letters    
const peopleWithProperName = people.filter((({ surname }) => /^[a-z]*$/i.test(surname)));
// 7. create an array of people, which salary is above average salaray            
const avgSalaray = people.reduce((avg, { salary }) => avg + salary / people.length, 0);
const peopleAboveAvgSalary = people.filter(({ salary }) => salary > avgSalaray);

const faculties = [
  {
    title: 'Informatics',
    students: [
      {
        fullname: 'Apsalas Klavenskas',
        course: 1,
        modules: [
          {
            title: 'Math 1',
            credits: 6,
            marks: [8, 9, 10, 8, 7]
          },
          {
            title: 'Objective Orientated programing',
            credits: 9,
            marks: [8, 7, 10, 6, 7]
          },
          {
            title: 'Physics 1',
            credits: 6,
            marks: [6, 7, 7, 6, 8]
          },
          {
            title: 'English',
            credits: 3,
            marks: [8, 9, 8, 10, 8]
          },
          {
            title: 'Digital logic',
            credits: 6,
            marks: [8, 9, 7, 5, 8]
          }
        ]
      },
      {
        fullname: 'Penedikas Tušinis',
        course: 1,
        modules: [
          {
            title: 'Math 1',
            credits: 6,
            marks: [10, 10, 10, 10, 10]
          },
          {
            title: 'Objective Orientated programing',
            credits: 9,
            marks: [10, 9, 9, 10, 10]
          },
          {
            title: 'Physics 1',
            credits: 6,
            marks: [10, 10, 10, 10, 10]
          },
          {
            title: 'English',
            credits: 3,
            marks: [9, 10, 8, 10, 10]
          },
          {
            title: 'Digital logic',
            credits: 6,
            marks: [10, 10, 10, 10, 10]
          }
        ]
      }, {
        fullname: 'Kendras Malačius',
        course: 2,
        modules: [
          {
            title: 'Applied Mathemathics',
            credits: 6,
            marks: [8, 9, 9, 9, 7]
          },
          {
            title: 'Databases',
            credits: 12,
            marks: [5, 6, 4, 7]
          },
          {
            title: 'Parallel programing',
            credits: 3,
            marks: [5, 7, 8, 9, 7]
          },
          {
            title: 'Theory of languages',
            credits: 3,
            marks: [9, 8, 7, 7, 7]
          },
          {
            title: 'Some module',
            credits: 6,
            marks: [8, 8, 8, 8, 8, 8, 8]
          }
        ]
      }
    ]
  },
  {
    title: 'Chemistry',
    students: [
      {
        fullname: 'Kolba Čigonaitė',
        course: 1,
        modules: [
          {
            title: 'Math 1',
            credits: 6,
            marks: [9, 9, 10, 10, 9]
          },
          {
            title: 'Chemical calculations',
            credits: 9,
            marks: [10, 10, 10, 10, 10]
          },
          {
            title: 'Physics 1',
            credits: 6,
            marks: [10, 10, 10, 10, 10]
          },
          {
            title: 'Enthrophy',
            credits: 3,
            marks: [9, 9, 9, 8, 8]
          },
          {
            title: 'English',
            credits: 6,
            marks: [9, 10, 9, 10, 10]
          }
        ]
      },
      {
        fullname: 'Karbiratorius Magna',
        course: 2,
        modules: [
          {
            title: 'Applied Mathematics',
            credits: 6,
            marks: [9, 9, 6, 10, 9]
          },
          {
            title: 'Entalpy',
            credits: 9,
            marks: [10, 10, 10, 10, 10]
          },
          {
            title: 'Carbohydrates',
            credits: 6,
            marks: [10, 7, 10, 10, 10]
          },
          {
            title: 'Organic chemistry',
            credits: 3,
            marks: [9, 9, 9, 8, 6]
          },
          {
            title: 'Chemical biology',
            credits: 6,
            marks: [7, 7, 9, 10, 10]
          }
        ]
      },
      {
        fullname: 'Fantazija Kiaunė',
        course: 2,
        modules: [
          {
            title: 'Applied Mathematics',
            credits: 6,
            marks: [4, 5, 9, 7]
          },
          {
            title: 'Entalpy',
            credits: 9,
            marks: [9, 10, 8, 7, 5]
          },
          {
            title: 'Carbohydrates',
            credits: 6,
            marks: [7, 8, 9, 5, 10]
          },
          {
            title: 'Organic chemistry',
            credits: 3,
            marks: [4, 7, 8, 9, 7]
          },
          {
            title: 'Chemical biology',
            credits: 6,
            marks: [8, 7, 8, 9, 10]
          }
        ]
      }
    ]
  }
];
/*
shape:
  [
    {
      title: [String]
      students: [
        {
          fullname: [String],
          course: [Number],
          modules: [
            {
              title: [String],
              credits: [Numbers],
              marks: [Array] of Numbers
            }, ...
          ]
        }, ...
      ]
    }, ...
  ]

  when calculating student average, make notice that not all module averages should be interpreted equaly:
    module credit score should have a weight on student average, by the sum of all module credits, for example:
      moduleX has an average of 8 and it's credit score is 10
      moduleY has an average of 9 and it's credit score is 5
      the average should be calculated like this (or similar to achieve same result):
        moduleX.avg * moduleX.credits /(moduleX.credit + moduleY.credit) + moduleY.avg * moduleY.credits /(moduleX.credit + moduleY.credit)
        8 * 10 / (10 + 5)  + 9 * 5 / (10 + 5) =  8.3(3)
*/

const mapStudentAvgAndFullname = stud => {
  const { compoundedWeights, totalCredits } =
    stud.modules.reduce(
      ({ compoundedWeights, totalCredits }, { credits, marks }) => ({
        compoundedWeights: compoundedWeights + credits * marks.reduce((avg, mark) => avg + mark) / marks.length,
        totalCredits: totalCredits + credits
      }), { compoundedWeights: 0, totalCredits: 0 });
  return {
    fullname: stud.fullname,
    avg: compoundedWeights / totalCredits
  }
};

// 8. Select students from chemistry faculty:                                                                   [ {fullname, course, modules}, ...]
const studentsChemistry = faculties.find(({ title }) => title === 'Chemistry').students;
console.groupCollapsed('8. Select students from chemistry faculty');
console.table(studentsChemistry);
console.groupEnd();

// 9. Select students from first course:                                                                        [ {fullname, course, modules}, ...]
const studentsFirstCourse = faculties.reduce((firstCourseStudents, faculty) => {
  return [
    ...firstCourseStudents,
    ...faculty.students
      .filter(({ course }) => course === 1)
  ]
}, []);
console.groupCollapsed('9. Select students from first course');
console.table(studentsFirstCourse);
console.groupEnd();

// 10. Create array of objects containing every student average and fullname:                                   [ {average, fullname}, ...]
const studentsWithAvg = faculties.reduce((students, faculty) => {
  return [
    ...students,
    ...faculty.students
      .map(mapStudentAvgAndFullname)
  ]
}, []);
console.groupCollapsed('10. Create array of objects containing every student average and fullname');
console.table(studentsWithAvg);
console.groupEnd();

// 11. Create array of objects containing chemistry student average and fullname:                               [ {average, fullname}, ...]
const studentsChemistryWithAvg = faculties.find(({ title }) => title === 'Chemistry')
  .students.map(mapStudentAvgAndFullname);
console.groupCollapsed('11. Create array of objects containing chemistry student average and fullname');
console.table(studentsChemistryWithAvg);
console.groupEnd();

// 12. Create array of objects containing second course average and fullname:                                   [ {average, fullname}, ...]
const studentsSecondCourseWithAverage = faculties.reduce((firstCourseStudents, faculty) => {
  return [
    ...firstCourseStudents,
    ...faculty.students
      .filter(({ course }) => course === 2)
      .map(mapStudentAvgAndFullname)
  ]
}, []);
console.groupCollapsed('12. Create array of objects containing second course average and fullname');
console.table(studentsSecondCourseWithAverage);
console.groupEnd();

// 13. Form an array of students which have at least one mark in any module, which in less than 5:              [ 'fullname1', 'fulname2', ...]
const debtors = faculties.reduce((facultyStudents, faculty) => [
  ...facultyStudents,
  ...faculty.students
    .filter(({ modules }) => modules
      .some(({ marks }) => marks
        .some(mark => mark < 5)))
    .map(({ fullname }) => fullname)
], []);
console.groupCollapsed('13. Form an array of students which have at least one mark in any module, which in less than 5');
console.table(debtors);
console.groupEnd();

// 14. Form an object of the student with highest average, containing props:                                    { fullname, avg, facultyName }
const bestStudent = faculties
  .reduce((students, faculty) => {
    return [
      ...students,
      ...faculty.students
        .map(stud => {
          const { compoundedWeights, totalCredits } = stud.modules.reduce(({ compoundedWeights, totalCredits }, { credits, marks }) => ({
            compoundedWeights: compoundedWeights + credits * marks.reduce((avg, mark) => avg + mark) / marks.length,
            totalCredits: totalCredits + credits
          }), { compoundedWeights: 0, totalCredits: 0 });
          return {
            facultyName: faculty.title,
            fullname: stud.fullname,
            avg: compoundedWeights / totalCredits
          }
        })
    ]
  }, [])
  .reduce((bestStudent, student) => student.avg > bestStudent.avg ? student : bestStudent);
console.groupCollapsed('14. Form an object of the student with highest average');
console.log(bestStudent);
console.groupEnd();

// 15. Return array of objects containing {fullname, avg, faculty, course}, ordered by avg descending:          [ {fullname, avg, faculty, course}, ...]
const studentsDescriptive = faculties
  .reduce((students, faculty) => {
    return [
      ...students,
      ...faculty.students
        .map(stud => {
          const { compoundedWeights, totalCredits } = stud.modules.reduce(({ compoundedWeights, totalCredits }, { credits, marks }) => ({
            compoundedWeights: compoundedWeights + credits * marks.reduce((avg, mark) => avg + mark) / marks.length,
            totalCredits: totalCredits + credits
          }), { compoundedWeights: 0, totalCredits: 0 });
          return {
            faculty: faculty.title,
            fullname: stud.fullname,
            course: stud.course,
            avg: compoundedWeights / totalCredits
          }
        })
    ]
  }, [])
  // Palyginimo funkcijos logika
  //  *>0 : Pirmu argumentu aprašytas elementas yra aukštesnio prioriteto
  //  0   : Prioritetai yra lygūs 
  //  *<0 : Pirmu argumentu aprašytas elementas yra žemesnio prioriteto
  .sort((studA, studB) => studB.avg - studA.avg);

console.groupCollapsed('15. Return array of objects containing {fullname, avg, faculty, course}, ordered by avg descending');
console.table(studentsDescriptive);
console.groupEnd();

// 16. group Students by 3 criterias ir separate arrays:
//  {
//    debtors:                [ {name, faculty}, ...]           // Students that have at least one mark less than 5
//    scolarshipHolders:      [ {name, faculty}, ...]           // Students which do not have a mark less than 5, and have average higher than 9.2
//    normal:                 [ {name, faculty}, ...]           // all others
//  }
const studentGroups = faculties
  .reduce((studentGroups, faculty) => {
    console.log( {
        title: faculty.title,
        studentGroups: JSON.parse(JSON.stringify(studentGroups))
      });
    faculty.students.forEach(stud => {
      const student = {
        fullname: stud.fullname,
        faculty: faculty.title
      };
      if (stud.modules.some(({ marks }) => marks.some(mark => mark < 5))) {
        studentGroups.debtors.push(student);
        return;
      }
      const { compoundedWeights, totalCredits } = stud.modules.reduce(({ compoundedWeights, totalCredits }, { credits, marks }) => ({
        compoundedWeights: compoundedWeights + credits * marks.reduce((avg, mark) => avg + mark) / marks.length,
        totalCredits: totalCredits + credits
      }), { compoundedWeights: 0, totalCredits: 0 });
      const avg = compoundedWeights / totalCredits;
      if (avg > 9.2)
        studentGroups.scolarshipHolders.push(student);
      else
        studentGroups.normal.push(student);
    })
    return studentGroups;
  }, {
    debtors: [],
    scolarshipHolders: [],
    normal: []
  });
console.log(studentGroups);




