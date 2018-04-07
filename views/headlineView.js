'use strict';

(function (exports) {
  function ViewHeadline(headlineRequest) {
    this._headlineRequest = headlineRequest;
  }

  ViewHeadline.prototype.headlineHTML = function () {
    var string = "<ul>"
    this._headlineRequest._headlines.forEach(function(article) {
      string += `<li><a href="#${article.id}">${article.webTitle}</a></li>`
    })
    string += "</ul>"
    return string
  }

  exports.ViewHeadline = ViewHeadline

})(this);
