let x = document.querySelectorAll("img");
for (let i = 0 ; i < x.length ; i++){
    x[i].addEventListener('mouseover',()=>{
        x[i].setAttribute("src","images/image"+(i+1)+"_2.jpg");
    })
}
for (let i = 0 ; i < x.length ; i++){
    x[i].addEventListener('mouseout',()=>{
        x[i].setAttribute("src","images/image"+(i+1)+".jpg");
    })
}