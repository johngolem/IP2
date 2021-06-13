var akanName= "d"
var gender = parseInt (prompt("What is your gender? Male or Female?"));
var DD= parseInt (prompt ("Enter the day date of birth xx"));
var MM= parseInt (prompt ("Enter month digits of the year you were born xx"));
var CC= parseInt (prompt ("Enter century digits of the year you were born xx98"));
var YY= parseInt (prompt ("Enter year digits of the year you were born 19xx"));

function akanName(){
    return ((d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) %7)
}
    if (gender === male && d === 2){ 
        console.log ("kwadwo");
    } else if (gender === male && d === 3 ){
        console.log ("kwabena");
    }  else if (gender === male && d === 4 ){
        console.log ("kwaku");
    } else if (gender === male && d ===5 ){
        console.log ("yaw");
    } else if (gender === male && d === 6){
        console.log ("kofi");
    } else if (gender === male && d === 7){
        console.log ("kwame");
    } else (gender === male && d === 1 );{
        console.log ("kwasi");
    } 
if (gender === female && d === 2){ 
    console.log ("adwoa");
} else if (gender === female && d === 3 ){
    console.log ("abenaa");
}  else if (gender === female && d === 4 ){
    console.log ("akua");
} else if (gender === female && d ===5 ){
    console.log ("yaa");
} else if (gender === female && d === 6){
    console.log ("afua");
} else if (gender === female && d === 7){
    console.log ("ama");
} else (gender === female && d === 8 );{
    console.log ("akosua");
} 