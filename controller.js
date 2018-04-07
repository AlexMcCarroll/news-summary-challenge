'use strict';

(function (exports) {
  function Controller(headline) {
    this._headline = headline
  }

  Controller.prototype.renderHeadlines = function () {
    document.getElementById("headlines").innerHTML = this._headline.headlineHTML();
  }

  Controller.prototype._getHeadlineId = function () {
    return window.location.hash.split("#")[1];
  }

  exports.Controller = Controller
})(this);
