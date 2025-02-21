$(document).ready(function () {
  $(window).scroll(function (){
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 50){
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  $('.scroll-up-btn').click(function (){
    $('html').animate({scrollTop: 0});
  });

  $('.menu-btn').click(function (){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })

  let typed = new Typed(".typing", {
    strings: ["Java Backend Developer", "Passionate learner",
      "Tech Explorer"],
    typeSpeed: 80,
    backSpeed: 45,
    loop: true
  });

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      },
      1400:{
        items: 4,
        nav: false
      },
      2000:{
        items: 5,
        nav: false
      }
    }
  });
})

var loader = document.getElementById("preloader")
window.addEventListener("load", function (){
  loader.style.display = "none";
})

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbx2R7c0vybd1EJ8cE9C3QDzBz9nPsRMvfeDcZx69OiODEa1dbI5DTGsdglk2J2WCtwM/exec'
const form = document.forms['submit-to-person']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function () {
          msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})
