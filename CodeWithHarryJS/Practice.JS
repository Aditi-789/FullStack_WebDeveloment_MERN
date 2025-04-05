let number= Math.floor(Math.random()*11);
let input=prompt("Enter Your Number");
let chances=0;
while(input!=number){
    if(input<number){
        console.log("Your chosen number is less than the target number")
    }
    else{
        console.log("Your chosen number is more than the target number")
    }
    chances+=1
    input=prompt("Enter Your Number")
}
console.log(`Congratulations!! You guessed the number. The number was ${number} & Your Score is ${10-chances}`);
