// // task-1 
let mark = parseFloat(prompt("Enter your mark : "));
let gread;
if (mark>=0 && mark < 33){
    gread = "F"
}
else if(mark >= 33 && mark < 41){
    gread = "D"
}
else if(mark >= 41 && mark < 51){
    gread = "C"
}
else if(mark >= 51 && mark < 61){
    gread = "B"
}
else if(mark >= 61 && mark < 70){
    gread = "A-"
}
else if(mark >= 71 && mark < 81){
    gread = "A"
}
else if(mark >= 71 && mark < 81){
    gread = "A+"
}

else{
    gread = "you have input something wrong."
}
document.getElementById('mark').innerText = gread;