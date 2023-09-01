function game(){
    let show = document.querySelector("#show");
    let hide = document.querySelector("#hide");
    let content = document.querySelector("p");
    
    show.addEventListener('click',()=>{
        content.style.display = "block";
    })
    hide.addEventListener('click',()=>{
        content.style.display = "none";
    })
}
