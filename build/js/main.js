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
var buttonLogin = document.querySelector('.user-list__link');
var popups = document.querySelectorAll('.popup');
var popupLogin = document.querySelector('.popup--login');
var popupAddProduct = document.querySelector('.popup--add-product');
var allButtosClosePopup = document.querySelectorAll('.popup__close');
var ESC_KEY_CODE = 'Escape';
var LEFT_MOUSE_BUTTON = 0;
var buttonAddCard = document.querySelector('.card__button');

header.classList.remove('header--bg');
toggle.classList.add('toggle--color');
search.classList.add('search--hidden');
logoIcon.classList.add('logo__icon--color');
navigation.classList.add('main-nav--hidden');
about.classList.add('about-us-list--hidden');
userList.classList.add('user-list--hidden');
cartIcon.classList.add('cart__icon--color');

if (filter) {
  if (filter.classList.contains('filter--overlay')) {
    filter.classList.remove('filter--overlay');
  }
  filter.classList.add('filter--hidden');
  filter.classList.add('filter--js');
}

if (buttonFilter) {
  if (buttonFilter.classList.contains('button--hidden')) {
    buttonFilter.classList.remove('button--hidden');
  }
}

if (filterPopup) {
  if (!filterPopup.classList.contains('filter__products--hidden')) {
    filterPopup.classList.add('filter__products--hidden');
  }
}

if (tabsFaqItems) {
  tabsFaqItems.forEach(function (tab) {
    tab.classList.add('faq__item--hidden');
  });
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

if (tabsFaqItems) {
  tabsFaqItems.forEach(function (tab) {
    tab.classList.remove('faq__item--active');
  });
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

var closePopupFilter = function () {
  filterPopup.classList.remove('filter__products--show');
  filterPopup.classList.add('filter__products--hidden');
  body.classList.remove('scroll');
  overlay.classList.remove('filter__overlay--show');
  filter.classList.add('filter--hidden');
  filter.classList.remove('filter--position');
};

if (filter) {
  var buttonClose = filter.querySelector('.filter__close');
  var overlay = filter.querySelector('.filter__overlay');

  buttonClose.addEventListener('click', closePopupFilter);
  overlay.addEventListener('click', closePopupFilter);
}

if (buttonClose) {
  if (buttonClose.classList.contains('filter__close--hidden')) {
    buttonClose.classList.remove('filter__close--hidden');
  }
}

if (buttonFilter) {
  var formFilter = filter.querySelector('.filter__form');
  buttonFilter.addEventListener('click', function () {
    if (!filterPopup.classList.contains('filter__products--show')) {
      filterPopup.classList.add('filter__products--show');
      filterPopup.classList.remove('filter__products--hidden');
      body.classList.add('scroll');
      overlay.classList.add('filter__overlay--show');
      filter.classList.remove('filter--hidden');
      filter.classList.add('filter--position');
      formFilter.classList.add('filter__form--position');
    }
  });
}

var showButtonsClosePopups = function () {
  allButtosClosePopup.forEach(function (button) {
    button.classList.add('popup__close--show');
  });
};

showButtonsClosePopups();

var openPopupLogin = function () {
  popupLogin.classList.remove('popup--no-js');
  popupLogin.classList.add('popup--show');
  body.classList.add('scroll');
};

var openPopupAddProduct = function () {
  popupAddProduct.classList.remove('popup--no-js');
  popupAddProduct.classList.add('popup--show');
  body.classList.add('scroll');
};

var closePopup = function () {
  popups.forEach(function (item) {
    item.classList.add('popup--no-js');
    item.classList.remove('popup--show');
    body.classList.remove('scroll');
  });
};

var onOpenPopupLogin = function (evt) {
  var form = popupLogin.querySelector('.login__form');
  var email = form.querySelector('.login__label--email input');
  email.focus();
  evt.preventDefault();
  openPopupLogin();

};

var onOpenPopupAddProduct = function (evt) {
  evt.preventDefault();
  openPopupAddProduct();
};

var onClosePopupPress = function (evt) {
  if (evt.key === ESC_KEY_CODE) {
    closePopup();
  }
};

var onClosePopupClick = function (evt) {
  if (evt.button === LEFT_MOUSE_BUTTON) {
    closePopup();
  }
};

buttonLogin.addEventListener('click', onOpenPopupLogin);
if (buttonAddCard) {
  buttonAddCard.addEventListener('click', onOpenPopupAddProduct);
}

document.addEventListener('keydown', onClosePopupPress);

allButtosClosePopup.forEach(function (button) {
  button.addEventListener('click', onClosePopupClick);
});

popups.forEach(function (popup) {
  popup.addEventListener('click', function (evt) {
    if (evt.target === popup) {
      closePopup();
    }
  });
});
