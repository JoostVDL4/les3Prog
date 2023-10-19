/* javascript input */

const dancing = document.getElementById("js--dancing");
const roboto = document.getElementById("js--roboto");
const rosarivo = document.getElementById("js--rosarivo");
const input = document.getElementById("js--input");


input.oninput = function(event){
    dancing.innerText = event.target.value;
    roboto.innerText = event.target.value;
    rosarivo.innerText = event.target.value;
}


/* javascript favorites*/

const hearts = document.getElementsByClassName("heart");

for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].children[0].classList= "fa-regular fa-heart heart__logo";
        }
        hearts[i].children[0].classList = "fa-solid fa-heart heart__logo";
    }
}



/* dark mode */

toggleButton = document.getElementById("js--toggle");
var header = document.getElementById("js--header");
var showcase = document.getElementById("js--showcase");


toggleButton.onclick = function(){
    var element = document.body;
    

    element.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    showcase.classList.toggle("dark-mode");
  
    
}