

   var gender = prompt("What is your gender? Male or Female?");
function DOB(CC,YY,MM,DD){
 
    var DD= parseInt (prompt ("Enter the day date of birth xx"));
    var MM= parseInt (prompt ("Enter month digits of when you were born xx"));
    var CC= parseInt (prompt ("Enter century digits of the year you were born xx98"));
    var YY= parseInt (prompt ("Enter year digits of the year you were born 19xx"));

    return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % (7);
}

if (gender === male && DOB <=0) {
    console.log ("kwasi");
} else if (gender === male && ( % (DOB) <0)){ 
    alert ("kwadwo");
} else if (gender === male && DOB === 3 ){
    alert ("kwabena");
}  else if (gender === male && DOB=== 4 ){
    console.log ("kwaku");
} else if (gender === male && DOB===5 ){
    console.log ("yaw");
} else if (gender === male && DOB=== 6){
    console.log ("kofi");
} else (gender === male && DOB=== 7){
    console.log ("kwame");

} 
if (gender === female && DOB === 2){ 
console.log ("adwoa");
} else if (gender === female && DOB=== 3 ){
console.log ("abenaa");
}  else if (gender === female && DOB === 4 ){
console.log ("akua");
} else if (gender === female && DOB===5 ){
console.log ("yaa");
} else if (gender === female && DOB === 6){
console.log ("afua");
} else if (gender === female && DOB === 7){
console.log ("ama");
} else (gender === female && DOB === 1 );{
console.log ("akosua");
} 