function unmatched(){
    let x = document.querySelector("#password").value;
    let y = document.querySelector("#confirmation").value;
    if(x !== y){
        document.querySelector("#password").style.border = "3px solid red";
        document.querySelector("#confirmation").style.border = "3px solid red";
    }
    else{
        document.querySelector("#password").style.border = "3px solid black";
        document.querySelector("#confirmation").style.border = "3px solid black";
    }
}