const inputSlider= document.querySelector("[data-lengthSlider]")
const lengthDisplay= document.querySelector("[data-lengthNumber]")
const passwordDisplay= document.querySelector("[data-passwordDisplay]")
const copyBtn= document.querySelector("[data-copy]")
const copyMsg= document.querySelector("[data-copyMsg]")
const uppercaseCheck= document.querySelector("#uppercase")
const lowercaseCheck= document.querySelector("#lowercase")
const numbersCheck= document.querySelector("#numbers")
const symbolsCheck= document.querySelector("#symbols")
const indicator= document.querySelector("[data-indicator]")
const generateBtn= document.querySelector(".generateButton")
const allCheckBox= document.querySelectorAll("input[type=checkbox]")
const symbols = '~`!@#$%^&*()_-+={[]}|/<>,.:;"?'

let password="";  
let passwordLength=10;
let checkCount=0;
// set strength circle colour to grey
setIndicator("#ccc");
handleSlider();

function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    const max=inputSlider.max;
    const min=inputSlider.min;
    inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min))+"% 100%"
}

function setIndicator(color){
    indicator.style.backgroundColor=color;
    // shadow wala kaam khud kro
}

function getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

function generateRandomNumber(){
    return getRandomInt(0,9);
}

function getRandomLowerCase(){
    return String.fromCharCode(getRandomInt(97,123))
}

function getRandomUpperCase(){
    return String.fromCharCode(getRandomInt(65,91))
}

function generateSymbol(){
    const randNum=getRandomInt(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSym=false;
    if(uppercaseCheck.checked) hasUpper=true;
    if(lowercaseCheck.checked) hasLower=true;
    if(numbersCheck.checked) hasNum=true;
    if(symbolsCheck.checked) hasSym=true;

    if(hasUpper&&hasLower &&(hasNum||hasSym)&&passwordLength>=8){
        setIndicator("#0f0");
    }
    else if((hasLower||hasUpper)&&(hasNum||hasSym)&&passwordLength>=6){
        setIndicator("#ff0");
    }
    else{
        setIndicator("#f00");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="Copied";
    }
    catch(e){
        copyMsg.innerText="Failed"
    }
    //to make copy span visible
    copyMsg.classList.add("active");

    setTimeout(()=>{
        copyMsg.classList.remove("active");
    }, 2000); 
}

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value) copyContent();
})

function handleCheckBoxChange(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked) checkCount++;
    });

    //special condition
    if(checkCount>passwordLength){
        passwordLength=checkCount;
        handleSlider();
    }
}

function shufflePassword(array){
    //Fisher Yates Method
    for(let i=array.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        const temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
    let str="";
    array.forEach((el)=>(str+=el));
    return str;
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange)
})

generateBtn.addEventListener('click',()=>{
    if(checkCount==0) return;
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
    //remove old password
    password="";
    //let's put the stuff mentioned by checkboxes

    let funcArr=[];

    if(uppercaseCheck.checked)
        funcArr.push(getRandomUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(getRandomLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0;i<funcArr.length;i++){
        password+=funcArr[i]();
    }

    //remaining addition
    for(let i=0;i<passwordLength-funcArr.length;i++){
        let randIndex=getRandomInt(0,funcArr.length);
        password+=funcArr[randIndex]();
    }

    //shuffle the password
    password= shufflePassword(Array.from(password));
    //show in UI
    passwordDisplay.value=password;
    //calculate strength
    calcStrength();

});