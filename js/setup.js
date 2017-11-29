'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var setupWizard = document.querySelector('.setup');

var getRandom = function (arr) {
  var getRandomNum = function (min, max) {
    return Math.floor((Math.random() * (max - min) + min));
  };
  var randNum = getRandomNum(0, arr.length - 1);
  return arr[randNum];
};

var wizards = [
  {
    name: getRandom(WIZARD_NAMES) + ' \n ' + getRandom(WIZARD_SURNAMES),
    eyesColor: getRandom(EYES_COLORS),
    coatColor: getRandom(COAT_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' \n ' + getRandom(WIZARD_SURNAMES),
    eyesColor: getRandom(EYES_COLORS),
    coatColor: getRandom(COAT_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' \n ' + getRandom(WIZARD_SURNAMES),
    eyesColor: getRandom(EYES_COLORS),
    coatColor: getRandom(COAT_COLORS)
  },
  {
    name: getRandom(WIZARD_NAMES) + ' \n ' + getRandom(WIZARD_SURNAMES),
    eyesColor: getRandom(EYES_COLORS),
    coatColor: getRandom(COAT_COLORS)
  }
];

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fillElements = function (elem) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  elem.appendChild(fragment);
};

var similarListElement = setupWizard.querySelector('.setup-similar-list');
fillElements(similarListElement);

setupWizard.querySelector('.setup-similar').classList.remove('hidden');

// module4-task1

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

var wizardExample = setupWizard.querySelector('.setup-wizard');
var wizardCoat = wizardExample.querySelector('.wizard-coat');
var wizardEyes = wizardExample.querySelector('.wizard-eyes');
var fireball = setupWizard.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function (evt) {
  evt.target.style.fill = getRandom(COAT_COLORS);
});

wizardEyes.addEventListener('click', function (evt) {
  evt.target.style.fill = getRandom(EYES_COLORS);
});

fireball.addEventListener('click', function (evt) {
  evt.target.style.backgroundColor = getRandom(FIREBALL_COLORS);
});


