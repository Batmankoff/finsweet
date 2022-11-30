$(function () {


 $('.questions__item-box').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('questions__item-box--active');
  });



  $('.reviews-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M11.5859 -1.23626e-07L13 3.21951L3.96947 10.9106L13 18.7805L11.5859 22L9.06922e-07 11.626L1.06329e-06 9.8374L11.5859 -1.23626e-07Z" fill="#282938"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.6" d="M1.41412 22L0 18.7805L9.03053 11.0894L0 3.21951L1.41412 0L13 10.374V12.1626L1.41412 22Z" fill="#282938"/></svg></button>',
    autoplay: true,
    autoplaySpeed: 2000,
  });
  var mixer = mixitup(".works__items ");
});