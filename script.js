var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');
var body = document.body; 

function menuShow(){
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
        body.classList.remove('no-scroll'); 
    }else{
        ul.classList.add('open');
        body.classList.add('no-scroll'); 
    }
}
