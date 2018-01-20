'use strict';

(function () {

  var setupDialogElement = document.querySelector('.setup');
  var dialogHandle = setupDialogElement.querySelector('.upload');
  var userWizard = setupDialogElement.querySelector('.setup-wizard');
  var userWizardCoat = userWizard.querySelector('.wizard-coat');
  var userWizardEyes = userWizard.querySelector('.wizard-eyes');
  var fireball = setupDialogElement.querySelector('.setup-fireball-wrap');

  // Передвигание окна с диалогом

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      // Решаем конфликт с тем, что на этом же элементе висит загрузка файлов
      if (dragged) {
        // Функция onClickPreventDefault отментяет стандартное опведение и удаляет
        // сразу же событие click чтобы эта фукция выполнилась только 1 раз, произошла только 1 проверка.
        var onClickPreventDefault = function () {
          evt.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


  // Покраска инвентаря
  var onCoatClick = function () {
    window.colorizeElement(userWizardCoat, userWizardCoat.style.fill, window.renderWizards.arrColorCoat, window.renderWizards.fillElement);
  };
  var onEyesClick = function () {
    window.colorizeElement(userWizardEyes, userWizardEyes.style.fill, window.renderWizards.arrColorEyes, window.renderWizards.fillElement);
  };
  var onFireballClick = function () {
    window.colorizeElement(fireball, fireball.style.backgroundColor, window.renderWizards.arrColorFireball, window.renderWizards.changeElementBackground);
  };

  // Изменение цвета мантии персонажа по нажатию.
  userWizardCoat.addEventListener('click', onCoatClick);
  // Изменение цвета глаз персонажа по нажатию.
  userWizardEyes.addEventListener('click', onEyesClick);
  // Изменение цвета фаербола по нажатию.
  fireball.addEventListener('click', onFireballClick);

})();
