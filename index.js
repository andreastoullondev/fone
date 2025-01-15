function slider(anything){
    
    document.querySelector('.one').src = anything;
};



let menu = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


const prato = "sujo";

for(let i = 0;i <= 10;i++){
    console.log(prato)
}
