'use strict';


window.renderWizards = (function () {

  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['101, 137, 164', '241, 43, 107', '146, 100, 161', '56, 159, 117', '215, 210, 55', '0, 0, 0'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var objColorFireball = {
    '#ee4830': 'rgb(238, 72, 48)',
    '#30a8ee': 'rgb(48, 168, 238)',
    '#5ce6c0': 'rgb(92, 230, 192)',
    '#e848d5': 'rgb(232, 72, 213)',
    '#e6e848': 'rgb(230, 232, 72)'
  };

  var setupWizard = document.querySelector('.setup');

  var wizards = [
    {
      name: window.utils.getRandom(WIZARD_NAMES) + ' \n ' + window.utils.getRandom(WIZARD_SURNAMES),
      eyesColor: window.utils.getRandom(EYES_COLORS),
      coatColor: window.utils.getRandom(WIZARD_COAT_COLORS)
    },
    {
      name: window.utils.getRandom(WIZARD_NAMES) + ' \n ' + window.utils.getRandom(WIZARD_SURNAMES),
      eyesColor: window.utils.getRandom(EYES_COLORS),
      coatColor: window.utils.getRandom(WIZARD_COAT_COLORS)
    },
    {
      name: window.utils.getRandom(WIZARD_NAMES) + ' \n ' + window.utils.getRandom(WIZARD_SURNAMES),
      eyesColor: window.utils.getRandom(EYES_COLORS),
      coatColor: window.utils.getRandom(WIZARD_COAT_COLORS)
    },
    {
      name: window.utils.getRandom(WIZARD_NAMES) + ' \n ' + window.utils.getRandom(WIZARD_SURNAMES),
      eyesColor: window.utils.getRandom(EYES_COLORS),
      coatColor: window.utils.getRandom(WIZARD_COAT_COLORS)
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
    setupWizard.querySelector('.setup-similar').classList.remove('hidden');
  };

  var similarListElement = setupWizard.querySelector('.setup-similar-list');
  fillElements(similarListElement);

  // Объект с экспортируемыми массивами цветов и методами для покраски элементов в диалоге
  return {
    arrColorEyes: EYES_COLORS.slice(),
    arrColorCoat: WIZARD_COAT_COLORS.map(function (elem) {
      return 'rgb(' + elem + ')';
    }),
    arrColorFireball: FIREBALL_COLORS.map(function (elem) {
      return objColorFireball[elem];
    }),
    fillElement: function (elem, color) {
      elem.style.fill = color;
    },
    changeElementBackground: function (elem, color) {
      elem.style.backgroundColor = color;
    }
  };

})();

