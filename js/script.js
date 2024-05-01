let loginbtn=document.querySelector('.header .login-btn');

document.querySelector('#login-btn').onclick=()=>{
    loginbtn.classList.toggle('active');
}
let navbar=document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    loginbtn.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
window.onload=()=>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
