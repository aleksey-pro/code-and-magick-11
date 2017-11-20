'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '18px PT Mono';
  ctx.fillStyle = '#000000';
  ctx.fillText('Ура вы победили!', 150, 30);
  ctx.fillText('Список результатов: ', 150, 50);

  function getMax(arr) {
    var max = -1;

    for (var i = 0; i < arr.length; i++) {
      var time = arr[i];
      if (time > max) {
        max = time;
      }
    }
    return max;
  }

  var max = getMax(times);

  function createGraphs() {
    var barWidth = 40;
    var indent = 80;
    var initialX = 190;
    var initialY = 240;
    var lineHeight = 25;
    var HistogramHeight = 150;
    var step = HistogramHeight / (max - 0);
    var myBarColor = 'rgba(255, 0, 0, 1)';

    // В функции Math.random добавлена 0.1 чтобы исключить значения 0.

    for (var i = 0; i < times.length; i++) {
      ctx.fillStyle = 'rgba(2, 14, 134, ' + (Math.random() + 0.1).toFixed(1) + ')';
      if (names[i] === 'Вы') {
        ctx.fillStyle = myBarColor;
      }
      ctx.fillRect(initialX + indent * i, initialY, -barWidth, -times[i] * step);
      ctx.fillStyle = '#000000';
      ctx.fillText(times[i].toFixed(0), initialX + indent * i - barWidth, initialY - times[i] * step - 10);
      ctx.fillText(names[i], initialX + indent * i - barWidth, initialY + lineHeight);
    }
  }

  createGraphs();

};
