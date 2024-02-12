let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.ClassList.toggle(' fa-times');
//     navbar.ClassList.toggle('active');
// }

// window.onscroll = () =>{
//     menu.ClassList.remove('show');
//     navbar.ClassList.remove('active');
// }

menu.onclick = function(){
    navbar.classList.toggle('active');
}