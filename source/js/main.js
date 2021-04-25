'use strict';

var header = document.querySelector('.header');
var toggle = header.querySelector('.toggle');
var search = header.querySelector('.search');
var logoIcon = header.querySelector('.logo__icon');
var navigation = header.querySelector('.main-nav');
var about = header.querySelector('.about-us-list');
var userList = header.querySelector('.user-list');
var cartIcon = header.querySelector('.cart__icon');
var tabsFaqItems = document.querySelectorAll('.faq__item');

header.classList.remove('header--bg');
toggle.classList.add('toggle--color');
search.classList.add('search--hidden');
logoIcon.classList.add('logo__icon--color');
navigation.classList.add('main-nav--hidden');
about.classList.add('about-us-list--hidden');
userList.classList.add('user-list--hidden');
cartIcon.classList.add('cart__icon--color');

toggle.addEventListener('click', function () {
  if (toggle.classList.contains('toggle--color')) {
    header.classList.add('header--bg');
    toggle.classList.remove('toggle--color');
    search.classList.remove('search--hidden');
    logoIcon.classList.remove('logo__icon--color');
    navigation.classList.remove('main-nav--hidden');
    about.classList.remove('about-us-list--hidden');
    userList.classList.remove('user-list--hidden');
    cartIcon.classList.remove('cart__icon--color');
  } else {
    header.classList.remove('header--bg');
    toggle.classList.add('toggle--color');
    search.classList.add('search--hidden');
    logoIcon.classList.add('logo__icon--color');
    navigation.classList.add('main-nav--hidden');
    about.classList.add('about-us-list--hidden');
    userList.classList.add('user-list--hidden');
    cartIcon.classList.add('cart__icon--color');
  }
});

var switchTabsAccordion = function (tabs) {
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      if (tab.classList.contains('faq__item--active')) {
        tab.classList.remove('faq__item--active');
      } else {
        tab.classList.add('faq__item--active');
      }
    });
  });
};


var swiperContainer = document.querySelector('.swiper-container');

if (swiperContainer) {
  var swiper = new window.Swiper(swiperContainer, {
    spaceBetween: 30,
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'pagination-list__page',
      bulletActiveClass: 'pagination-list__page--active',
      renderBullet: function (index, className) {
        return '<button class="' + className + '">' + (index + 1) + '</button>';
      }
    },

    breakpoints: {
      0: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  swiper.slideNext();
}


switchTabsAccordion(tabsFaqItems);
