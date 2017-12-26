window.utils = (function() {

  return {
    getRandom: function (arr) {
      var getRandomNum = function (min, max) {
        return Math.floor((Math.random() * (max - min) + min));
      };
      var randNum = getRandomNum(0, arr.length - 1);
      return arr[randNum];
    }
  }

})();
