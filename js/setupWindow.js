'use strict';

window.setupWindow = (function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var setupWizard = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupWizard.querySelector('.setup-close');
  var setupSubmit = document.querySelector('.setup-submit');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  };

  var openPopup = function () {
    setupWizard.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupWizard.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', onPopupEnterPress);

  setupSubmit.addEventListener('keydown', onPopupEnterPress);

  var nameInput = document.querySelector('input[name="username"]');

  var onInputFocus = function (evt) {
    if (evt.target === nameInput) {
      document.removeEventListener('keydown', onPopupEscPress);
    } else {
      document.addEventListener('keydown', onPopupEscPress);
    }
  };

  document.addEventListener('keydown', onInputFocus, true);
  document.addEventListener('keydown', onInputFocus, true);
})();

