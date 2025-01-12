// document.addEventListener('click',function(){
//     console.log('I have Clicked!!')
// })

// function clicking(){
//     console.log('I have Clicked!!')
// }

// document.addEventListener('click',clicking);
// document.removeEventListener('click',clicking);

// let links=document.querySelectorAll('a');
// let thirdLink=links[2];
// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('yeahh!! prevented!');
// })

// let myDiv=document.createElement('div');

// function paraStatus(event){
//     console.log('I have clicked on para '+event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus);

// for(let i=1;i<=100;i++){
//     let newElement=document.createElement('p');
//     newElement.textContent='This is para'+ i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv); 

let element= document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if(event.target.nodeName==='SPAN'){
        console.log('span pe click kia hai '+ event.target.textContent);
    }
});

// target property returns the element where my event occured
