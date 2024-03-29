// Q1. make a string out of an array
// {
//   const fruits = new Fruits();
//   const fruits = ['apple', 'banana', 'orange'];
// }
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(',');
  console.log(result);
}

// Q2. make an array out of a string
// {
//   const fruits = '🍎, 🥝, 🍌, 🍒';
//   console.log(fruits);
//   console.log(fruits.length);
//   console.log(fruits[0]);
//   console.log(fruits[1]);
//   console.log(fruits[2]);
//   console.log(fruits[3]);
// }
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// {
//   const array = [1, 2, 3, 4, 5];
//   arrary.splice(0);
//   console.log(array);
//   array.push('5','4','3','2','1');
//   console.log(array);
// }
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
// {
//   const array = [1, 2, 3, 4, 5];
//   array.splice(0, 2);
//   console.log(array);
// }
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    console.log(students);
    console.log(students.indexOf('C'));
}

// Q6. make an array of enrolled students
{
    console.log(students.enrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    console.log(students.score);
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
    console.log(students.age);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    console.log(students.score);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}