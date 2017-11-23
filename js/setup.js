'use strict';

var setupWizard = document.querySelector('.setup');
setupWizard.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (arr) {
  function _getRandomNum(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
  }
  var randNum = _getRandomNum(0, arr.length - 1);
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
