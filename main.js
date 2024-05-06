function clr(){
    document.getElementById("answer").value="";
}
function display(val){
    document.getElementById("answer").value+=val;
}
function equate(){
    let x=document.getElementById("answer").value;
    let y=eval(x);
    document.getElementById("answer").value=y;
  
}