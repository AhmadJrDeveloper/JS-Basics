function set_color(){
    let green = document.querySelector(".green");
    let red = document.querySelector(".red");
    let blue = document.querySelector(".blue");
    let content = document.querySelector("p");

    blue.addEventListener('click',()=>{
        content.style.color = "blue";
    })

    green.addEventListener('click',()=>{
        content.style.color = "green";
    })

    red.addEventListener('click',()=>{
        content.style.color = "red";
    })

}