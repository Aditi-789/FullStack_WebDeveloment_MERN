// // two types of string: Primituve string and object string
// //Primitive string:
// let lastName='Sharma'
// //Object string
// let firstName=new String('Aditi')

// let message='my name is Aditi Sharma'
// let words=message.split(' ')
// console.log(words)
// console.log(words.length)

// // backticks me likhne se jaise IDE me likhenge vese hi show krega
// let messages=
// `${firstName}
// Hare Krishna Hare Krishna
// Krishna Krishna Hare Hare
// Hare Rama Hare Rama
// Rama Rama Hare Hare`;

// console.log(messages);

// let date=new Date();
// console.log(date);
// let date2=new Date('August 21 2023 22:25');
// console.log(date2);

// let numbers=[3,5,7,11,13];
// console.log(numbers);
//end->push
//starting->unshift
//middle->splice

// //searching
// console.log(numbers.indexOf(13));

// //to find whether present or not
// console.log(numbers.includes(7));
// //ek particular index se start krna ho checking
// console.log(numbers.indexOf(3,2));

let courses=[
    {no:1, identity:'Aditi'},
    {no:2, identity:'Karina'}
]

console.log(courses);
// console.log(courses.includes({no:1,identity:'Aditi'})); -->isse nhi milega coz this is for primitives not objects


// // A callback function is a function passed into another function as an argument,
// // which is then invoked inside the outer function to complete some kind of routine or action.

// let course=courses.find(function(course){
//     return course.identity=='Aditi';
// })
// // ye vo object return krdega jise hum find kr rhe h
// // short me likhne ke liye we use arrow function
// let course = courses.find(course=> course.identity==='Aditi');

// console.log(course);

// let numbers=[1,2,3,4,5,6,7,8];
// numbers.pop();
// numbers.shift();
// numbers.splice(2,1);
// console.log(numbers);

// // emptying an array:
// numbers=[];
// numbers.length=0;
// numbers.splice(0,numbers.length());

// let first=[1,2,3,4,5];
// let second=[6,7,8,9,10];
// let combined=first.concat[second];

//  sliced operator -> slice(2,6) 2,6 is index range with 2 inclusive and 6 exclusive
// combining and slicing for objects (this was for primitives)

// // spread operator for concatenation
// let num1=[1,2,3];
// let num2=[4,5,6];
// let combined=[...first, ...second];
// // copy banana
// let another=[...combined];

// // Iterating an array
// arr.forEach(function(number){
//     console.log(number);
// });

// arr.forEach(number=>console.log(number));

// // Joining Arrays
// let numbers=[10,20,30,40,50];
// const joined=numbers.join(',');
// console.log(joined)
// // splitting arrays
// const splitting=joined.split(',');
// console.log(splitting);

// // sorting array
// let numbers=[1,5,8,2,3];
// numbers.sort(); -->iska behaviour smjhna mdn se, normal sort nhi h
// // ab agar reverse me krna ho sort toh ab reverse lgado
// numbers.reverse(); 

// let numbers=[1,2,-1,-4];
// numbers.filter(function(value){
//     return value>=0;
// });

// // mapping
// let numbers=[1,2,3,4];
// let items=numbers.map(function(value){
//     return 'student_no'+value;
// });
// console.log(items);
