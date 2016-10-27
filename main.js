(function () {
  'use strict';

  var DialogView = function (options) {
    var rootEl = document.createElement('div');
    var self = {};
    rootEl.classList.add('dialog');
    rootEl.innerHTML = '<div class="content">Hi, I am dialog!</div>' +
        '<div class="buttonTray">' +
            '<button class="okBtn">' + options.okText + '</button>' +
            '<button class="cancelBtn">' + options.cancelText + '</button>' +
        '</div>';


    var onOKBtnClicked = function () {
      // makeSth
    };
    var okBtn = rootEl.querySelector('.okBtn');
    okBtn.addEventListener('click', onOKBtnClicked, false);
    
    self.getRootEl = function () {
      return rootEl;
    };
    
    return self;
  };

  var showDialogBtn = document.createElement('button');
  showDialogBtn.innerText = 'show dialog';
  showDialogBtn.addEventListener('click', function () {
    var dialog = new DialogView({
      okText: "Ok, I know",
      cancelText: "Cancel"
    });
    document.body.appendChild(dialog.getRootEl());
  });

  document.body.appendChild(showDialogBtn);

}());