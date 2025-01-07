console.log("let's start");
//object-creation
// let rectangle={
//     length:1,
//     breadth:2,

//     draw:function(){
//         console.log('drawing rectangle')
//     }
// };

//factory-function

// function createRectangle(length,breadth) {
//     return rectangle={
//         length:length,
//         breadth:breadth,
    
//         draw:function(){
//             console.log('drawing rectangle')
//         }
//     };
// };

//object creation using factory function: 
// let rectangleObj1=createRectangle(5,4);

// constructor-function->pascal notation-> first letter of every word is capital
// function Rectangle() {
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }
// object-creation using constructor function:
// let rectangleObj=new Rectangle();
// rectangleObj.color='yellow';
// console.log(rectangleObj);

// delete rectangleObj.color;
// console.log(rectangleObj);

let rectangle={
    length:2,
    breadth:6
};

// for-in loop
for(let key in rectangle){
    console.log(key,rectangle[key]);
}

// for-of loop
for(let key of Object.keys(rectangle)){
    console.log(key);
}

for(let key of Object.entries(rectangle)){
    console.log(key);
}

//check whether some property is there in function or not
if('length' in rectangle){
    console.log('present');
}
else{
    console.log('absent');
}

// 3 methods of Object Cloning
let src={
    a:10,
    b:20,
    c:30
};

// 1.Iteration
let dest={};
for(let key in src){
    dest[key]=src[key];
}

// 2.Assign
// let dest=Object.assign({},src);

// 3.Spread 
// let dest={...src};

// NOTES
// by using constructor in console, we can find out the constructor of any object
// for example, if i will write RectangleObj.constructor in console, then i will get the function that constructed it
// in this case i will get Rectangle wala whole function
// ALSO, NOTE THAT EVERY FUNCTION IS ALSO AN OBJECT , SO THERE'S AN INBUILT CONSTRUCTOR FOR EVRY FUNCTION TOO
// kaise, aise-> let rect=new function('length', 'breadth', `code`)....rect manlo inbuilt construc krne wale function ka naam
// aur usme phle parameters pass krenge , fir back tick me code
// function bhi ek object hai, jiske hum kuch properties and methods access krskte h using dot operator
// Primitives are copied by their value
// References are copied by their addresses

// we have no control over garbage collector, automatically unused wale variables etc ko deallocate krdeta h, space free krdeta h
