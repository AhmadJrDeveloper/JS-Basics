function makeNull(){
const name = document.querySelector("#name");
const surname = document.querySelector("#surname");
const city = document.querySelector("#city");
 let result = confirm("Are you sure you want to delete all inputs?");
 if(result){
    name.value = "";
    surname.value = "";
    city.value = "";
 }

}