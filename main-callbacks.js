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
      if (typeof options.onOkClicked === 'function') {
        options.onOkClicked();
      }
    };

    var okBtn = rootEl.querySelector('.okBtn');
    okBtn.addEventListener('click', onOKBtnClicked, false);
    
    self.getRootEl = function () {
      return rootEl;
    };

    self.destroy = function () {
      okBtn.removeEventListener('click', onOKBtnClicked, false);
    };
    
    return self;
  };

  var MainWidget = function () {
    var showDialogBtn = document.createElement('button');
    showDialogBtn.innerText = 'show dialog';
    showDialogBtn.addEventListener('click', function () {
      var dialog = new DialogView({
        okText: "Ok, I know...",
        cancelText: "Cancel",
        onOkClicked: function () {
          alert("ok!");
          document.body.style.background = 'red';
          document.body.removeChild(dialog.getRootEl());
          dialog.destroy();
        }
      });
      document.body.appendChild(dialog.getRootEl());
    });

    document.body.appendChild(showDialogBtn);
  };

  new MainWidget();

}());