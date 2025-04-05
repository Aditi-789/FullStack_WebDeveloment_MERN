let userChoice=prompt("Enter Your Choice");
function getRandomLetter() {
    const letters = ["S", "W", "G"];
    return letters[Math.floor(Math.random() * letters.length)];
}

let compChoice=getRandomLetter();
generateWinner=(userChoice,compChoice)=>{
    if(userChoice===compChoice) return "draw";
    if(userChoice==="S"){
        return compChoice==="W"?"user":"comp";
    }
    else if(userChoice==="W"){
        return compChoice==="S"?"comp":"user";
    }
    else{
        return compChoice==="S"?"user":"comp";
    }
}
let winner=generateWinner(userChoice,compChoice);
document.write(`user's choice was : ${userChoice} , computer's choice was : ${compChoice} and Winner: ${winner}`);
