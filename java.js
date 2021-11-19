
const original =[];

function reverseThisString(){
    const namesList = original.map(function(name){
        return name.split("").reverse().join("") ;
    }).join(" ");
    document.getElementById('name').innerHTML = namesList ;
}
const words =[];
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

function swapCase(){
    words.map(function(letters){
        for (var i=0; i<letters.length;i++){
            if(UPPER.indexOf(letters[i])!==-1){
                result.push(letters[i].toLowerCase());
            }
            else if (LOWER.indexOf(letters[i]) !== -1)
            {
            result.push(letters[i].toUpperCase());
            }
            else{
                result.join("");
            }
        }
       return result.join("");
    }).join("");
    document.getElementById('name1').innerHTML = result ;
}

const farenheit= [23, 32, 41, 50, 59];
function toCelcius(){
    const celcius = farenheit.map(x => (x - 32)*5/9)
    document.getElementById('name2').innerHTML ='['+ celcius +']';
}

const array=[];
function passOrFail(){
    const newarray = array.map(x => x>=75);
    
    document.getElementById('name3').innerHTML = '['+ newarray +']' ;
}


const togther=[]
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    cardinalNumbers.forEach((num, i) => {
    const german = germanNumbers[i];
    togther.push(num + ' is ' + german);
});

document.getElementById('name4').innerHTML = '<br>'+togther   ;
}


function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const primeNumbers= numbers.filter(function(primeN){
        if(primeN===1){
            return false;
        }
        for(var i=2;i<primeN;i++){
            if(primeN % i===0){
                return false;
            }
        }
        return true;
    })
    document.getElementById('name5').innerHTML = '<br>'+primeNumbers   ;
}       
const multi=[]    
function loop(){
    for(var i=1;i<=100;i++)
    multi[i]=i;

    for(var i=0;i<multi.length;i++)
    {
        if(multi[i] % 5 === 0 && multi[i]% 3 ===0){
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
            continue;
        }
        if(multi[i] % 3 === 0){
            console.log("CSC225 RULES");
            continue;
        }
        if(multi[i] % 5 === 0){
            console.log("I LOVE JAVASCRIPT");
            continue;
        }
        console.log(multi[i]);
    }
}


document.addEventListener("DOMContentLoaded", function(){
    reverseThisString();
    swapCase();
    toCelcius();
    passOrFail();
    germanNumbers();
    returnPrimeNumbers();
    loop();
    document
        .getElementById('reversed')
        .addEventListener('click',function(){
        const stringToReverse=document.getElementById('reversedstring').value;
        if(!stringToReverse){
            return;
        }
        original.push(stringToReverse);
        reverseThisString();
        stringToReverse.value='';
    });
    document
        .getElementById('lettersSwapped')
        .addEventListener('click',function(){
        const wordtochange=document.getElementById('swapcases').value;
        if(!wordtochange){
            return;
        }
        words.push(wordtochange);
        swapCase();
        wordtochange.value='';
    });
    document
    .getElementById('booleans')
    .addEventListener('click',function(){
    const arraytochange=document.getElementById('array').value;
    if(!arraytochange){
        return;
    }
    array.push(arraytochange);
    passOrFail();
    arraytochange.value='';
});
});
