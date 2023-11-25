var number=0;//global variable
function count(){
    number++;
    document.getElementById("count").innerHTML = number;
}
function countback(){
    number--;
    document.getElementById("count").innerHTML = number;   
}
function reset(){
    number=0;
    document.getElementById("count").innerHTML = number;
}