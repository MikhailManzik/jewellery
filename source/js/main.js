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
var tabsFilter = document.querySelectorAll('.filter__legend');
var filter = document.querySelector('.filter');
var filterPopup = document.querySelector('.filter__products');
var body = document.querySelector('body');
var buttonFilter = document.querySelector('.button--filter');

header.classList.remove('header--bg');
toggle.classList.add('toggle--color');
search.classList.add('search--hidden');
logoIcon.classList.add('logo__icon--color');
navigation.classList.add('main-nav--hidden');
about.classList.add('about-us-list--hidden');
userList.classList.add('user-list--hidden');
cartIcon.classList.add('cart__icon--color');

if (buttonFilter) {
  if (buttonFilter.classList.contains('button--hidden')) {
    buttonFilter.classList.remove('button--hidden');
  }
}

if (filter) {
  if (filter.classList.contains('filter--overlay')) {
    filter.classList.remove('filter--overlay');
  }
}

if (filterPopup) {
  if (!filterPopup.classList.contains('filter__products--hidden')) {
    filterPopup.classList.add('filter__products--hidden');
  }
}

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

var switchTabsAccordion = function (tabs, className) {
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      if (tab.classList.contains(className)) {
        tab.classList.remove(className);
      } else {
        tab.classList.add(className);
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

switchTabsAccordion(tabsFaqItems, 'faq__item--active');
switchTabsAccordion(tabsFilter, 'filter__legend--active');

if (tabsFilter) {
  tabsFilter.forEach(function (tab) {
    if (!tab.classList.contains('filter__legend--hidden')) {
      tab.classList.add('filter__legend--hidden');
    }
  });
}

var closePopup = function () {
  filterPopup.classList.remove('filter__products--show');
  filterPopup.classList.add('filter__products--hidden');
  body.classList.remove('scroll');
  overlay.classList.remove('filter__overlay--show');
  filter.classList.add('filter--hidden');
  filter.classList.remove('filter--position');
};


var buttonClose = filter.querySelector('.filter__close');
var overlay = filter.querySelector('.filter__overlay');
var buttonFilter = document.querySelector('.button--filter');
buttonClose.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);

if (buttonClose) {
  if (buttonClose.classList.contains('filter__close--hidden')) {
    buttonClose.classList.remove('filter__close--hidden');
  }
}

if (buttonFilter) {
  var form = filter.querySelector('.filter__form');
  buttonFilter.addEventListener('click', function () {
    if (!filterPopup.classList.contains('filter__products--show')) {
      filterPopup.classList.add('filter__products--show');
      filterPopup.classList.remove('filter__products--hidden');
      body.classList.add('scroll');
      overlay.classList.add('filter__overlay--show');
      filter.classList.remove('filter--hidden');
      filter.classList.add('filter--position');
      form.classList.add('filter__form--position');
    }
  });
}

