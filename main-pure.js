(function () {
  'use strict';

  var DialogView = function (options) {
    var rootEl = document.createElement('div');
    var self = {};
    rootEl.classList.add('dialog');
    rootEl.innerHTML = '<div class="content">Hi, I am dialog!</div>' +
        '<div class="buttonTray">' +
            '<button class="okBtn">' + options.OkText + '</button>' +
            '<button class="cancelBtn">' + options.cancelText + '</button>' +
        '</div>';

    self.getRootEl = function () {
      return rootEl;
    };
    
    return self;
  };

}());