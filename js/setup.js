'use strict';

(function () {

  //  Drag elements to bag

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsCell = document.querySelector('.setup-artifacts-cell');
  var dropZone = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      artifactsCell.style.backgroundColor = 'yellow';
      dropZone.style.outline = '2px dashed red';
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');
  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.appendChild(draggedItem);
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    dropZone.style.outline = 'none';
    artifactsCell.style.backgroundColor = '';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
  });


  var setupWizard = document.querySelector('.setup');
  var wizardExample = setupWizard.querySelector('.setup-wizard');
  var wizardCoat = wizardExample.querySelector('.wizard-coat');
  var wizardEyes = wizardExample.querySelector('.wizard-eyes');
  var fireball = setupWizard.querySelector('.setup-fireball-wrap');



  // Покраска инвентаря

  var fillElement = function(evt, element, colors) {
    evt.target.style.fill = window.utils.getRandom(colors);
  };

  var changeElementBackground = function(evt, element, colors) {
    evt.target.style.backgroundColor = window.utils.getRandom(colors);
  };

  var onCoatClick = function () {
    window.colorizeElement(wizardCoat, ['red', 'green', 'blue'], fillElement);
  };
  var onEyesClick = function () {
    window.colorizeElement(wizardEyes, ['navy', 'teal', 'orange'], fillElement);
  };
  var onFireballClick = function () {
    window.colorizeElement(fireball, ['yellow', 'black', 'aliceblue'], changeElementBackground);
  };


  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);

})();

