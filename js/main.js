'use strict';

let enter = document.querySelector('#enter'),
    login = document.querySelector('.login'),
    loginBg = document.querySelector('.login-bg'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    error = document.querySelectorAll('.error'),
    submit = document.querySelector('#submit');


enter.addEventListener('click', function(){
    login.classList.remove('login-hide');
});

loginBg.addEventListener('click', function(e){
    if(e.target == this){
    login.classList.add('login-hide');
    password.value = '';
    password.style.borderBottom = '1px solid grey';
    email.value = '';
    email.style.borderBottom = '1px solid grey';
    error.forEach(function(item){
      item.innerHTML = "";
    });
    }

});

submit.addEventListener('click', function(){
  if(email.value == ''){
    error[0].innerHTML = "e-mail не может быть пустым";
    email.style.borderBottom = '1px solid red'; 
  } else if (!email.value.includes('@') || !email.value.includes('.') || email.value.length < 5){
    error[0].innerHTML = "неправильный формат e-mail";
    email.style.borderBottom = '1px solid red'; 
  } else {
    error[0].innerHTML = "";
    email.style.borderBottom = '1px solid grey';
  }

});

submit.addEventListener('click', function(){
  if(password.value == ''){
    error[1].innerHTML = "пароль не может быть пустым";
    password.style.borderBottom = '1px solid red'; 
  } else if(password.value.length < 6){
    error[1].innerHTML = "пароль должен содерать больше 6 символов";
    password.style.borderBottom = '1px solid red'; 
  } else {
    error[1].innerHTML = "";
    password.style.borderBottom = '1px solid grey';
  }
});