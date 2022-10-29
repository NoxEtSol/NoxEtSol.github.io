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
      "Junior in IT World"],
    typeSpeed: 80,
    backSpeed: 45,
    loop: true
  });

  let typed2 = new Typed(".typing-2", {
    strings: ["Java Backend Developer", "Passionate learner",
      "Junior in IT World"],
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