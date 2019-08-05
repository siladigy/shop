'use strict';

let enter = document.querySelector('#enter'),
    login = document.querySelector('.login'),
    loginBg = document.querySelector('.login-bg'),
    email = document.querySelector('#email'),
    password = document.querySelector('#password'),
    error = document.querySelectorAll('.error'),
    submit = document.querySelector('#submit'),
    search = document.querySelector('#search'),
    searchLine = document.querySelector('.search-line'),
    switcher = document.querySelector('.goods-switcher'),
    block = document.querySelectorAll('.block'),
    img = document.querySelectorAll('.img'),
    pic = document.querySelectorAll('.pic'),
    menuWrap = document.querySelector('.main-menu'),
    menuList = document.querySelectorAll('.menu');


enter.addEventListener('click', function(){
    login.classList.remove('login-hide');
});

searchLine.addEventListener('focus', () => {
  search.classList.toggle('slider-active-btn');
  searchLine.style.color = 'rgba(0, 0, 0, 1)';
});

searchLine.addEventListener('focusout', () => {
  search.classList.toggle('slider-active-btn');
  searchLine.style.color = 'rgba(0, 0, 0, 0)';
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

// switcher.addEventListener('click', () => {

//   block.forEach((elem) => {
//     elem.classList.toggle('block-small');
//   });

//   img.forEach((elem) => {
//     elem.classList.toggle('img-small');
//   });

//   pic.forEach((elem) => {
//     elem.classList.toggle('pic-small');
//   });
// });

menuWrap.addEventListener('click', function (event) {

  let panel = event.target;

  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 

});

search.addEventListener('click', () => {

 let res = searchLine.value.split();

 for(let i=0; i<res.length; i++){
   console.log(res[i].toLowerCase());
 }

  
});


// slider

  let prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        slider = document.querySelector('.slider-wrap'),
        slide = document.querySelectorAll('.slider-block'),
        carousel = document.querySelector('.slider'),
        dots = document.querySelector('.slider-dots'),
        interval;



    let first = slide[0].cloneNode(true);   
    slider.appendChild(first); 

    let last = slide[slide.length-1].cloneNode(true);
    slider.insertBefore(last, slider.childNodes[0]);
    slide = document.querySelectorAll('.slider-block');
    let size = slide[0].clientWidth,
        counter = 1;

    slider.style.transform = "translateX(" + (-size * counter) + "px)";

    const createDots = () => {
      for(let i = 0; i < (slide.length - 2); i++){
        let dot = document.createElement('div');
        dot.classList.add('slider_dot');
        dots.appendChild(dot);
        dot.setAttribute('id', i+1);
      }
      };
      createDots();
      
      const dot = document.querySelectorAll('.slider_dot');
      dot[0].classList.add('slider-active');
      

    const moveSlider = () => {
      if(counter >= slide.length-1) return;
      counter ++;
      slider.style.transition = "1s";
      slider.style.transform = "translateX(" + (-size * counter) + "px)";
      for(let i=0; i<(slide.length-2); i++){
        if(dot[i].id == counter){
          dot.forEach((elem) => {
            elem.classList.remove('slider-active');
          });
          dot[i].classList.add('slider-active');
        } else if (counter > slide.length-2){
          dot.forEach((elem) => {
            elem.classList.remove('slider-active');
          });
          dot[0].classList.add('slider-active');
        }
      }
    };

    const startSlide = () => {
      interval = setInterval(moveSlider, 5000);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    prev.addEventListener('click', () => {
      if(counter <=0) return;
      counter --;
      slider.style.transition = ".5s";
      slider.style.transform = "translateX(" + (-size * counter) + "px)";
      for(let i=0; i<(slide.length-2); i++){
        if(dot[i].id == counter){
          dot.forEach((elem) => {
            elem.classList.remove('slider-active');
          });
          dot[i].classList.add('slider-active');
        } else if (counter == 0){
          dot.forEach((elem) => {
            elem.classList.remove('slider-active');
          });
          dot[3].classList.add('slider-active');
        }
      }
    });

    next.addEventListener('click', () => {
      if(counter >= slide.length-1) return;
      counter ++;
      slider.style.transition = ".5s";
      slider.style.transform = "translateX(" + (-size * counter) + "px)";
      for(let i=0; i<(slide.length-2); i++){
        if(dot[i].id == counter){
          dot.forEach((elem) => {
            elem.classList.remove('slider-active');
          });
          dot[i].classList.add('slider-active');
        } else if (counter > slide.length-2){
          dot.forEach((elem) => {
            elem.classList.remove('slider-active');
          });
          dot[0].classList.add('slider-active');
        }
      }
    });

slider.addEventListener('transitionend', () => {
  if(counter === slide.length-1){
    slider.style.transition = "none";
    counter = 1;
    slider.style.transform = "translateX(" + (-size * counter) + "px)";
  };
  if(counter === 0){
    slider.style.transition = "none";
    counter = slide.length-2;
    slider.style.transform = "translateX(" + (-size * counter) + "px)";
  };
});

carousel.addEventListener('mouseover', (event) => {
  if(event.target.matches('.slider-btn') || event.target.matches('.slider_dot')){
    stopSlide();
  }
});

carousel.addEventListener('mouseout', (event) => {
  if(event.target.matches('.slider-btn') || event.target.matches('.slider_dot')){
    startSlide();
  }
});

carousel.addEventListener('click', (event) => {
  let target = event.target;
  if(target.matches('.slider_dot')){
    counter = target.id;
    slider.style.transform = "translateX(" + (-size * counter) + "px)";
    for(let i=0; i<(slide.length-2); i++){
      if(dot[i].id == counter){
        dot.forEach((elem) => {
          elem.classList.remove('slider-active');
        });
        dot[i].classList.add('slider-active');
      } else if (counter == 0){
        dot.forEach((elem) => {
          elem.classList.remove('slider-active');
        });
        dot[3].classList.add('slider-active');
      }
    }
  }
});


startSlide();
    