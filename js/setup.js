'use strict';

window.setup = (function () {

  // setup wizard copy

  var setupWizard = document.querySelector('.setup');
  var wizardExample = setupWizard.querySelector('.setup-wizard');
  var wizardCoat = wizardExample.querySelector('.wizard-coat');
  var wizardEyes = wizardExample.querySelector('.wizard-eyes');
  var fireball = setupWizard.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function (evt) {
    evt.target.style.fill = window.utils.getRandom(window.renderWizards.arrColorCoat);
  });

  wizardEyes.addEventListener('click', function (evt) {
    evt.target.style.fill = window.utils.getRandom(window.renderWizards.arrColorEyes);
  });

  fireball.addEventListener('click', function (evt) {
    evt.target.style.backgroundColor = window.utils.getRandom(window.renderWizards.arrColorFireball);
  });


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

})();

