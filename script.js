var number=0;//global variable
function count(){
    document.getElementById("count").innerHTML = ++number;
}
function countback(){
    document.getElementById("count").innerHTML = --number;   
}
function reset(){
    number=0;
    document.getElementById("count").innerHTML = number;
}