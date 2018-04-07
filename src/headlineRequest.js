"use strict";

(function(exports) {
  function HeadlineRequest(headlines = null) {
    this._headlines = headlines;
  }

  HeadlineRequest.prototype.makeRequest = function() {
    var request = new XMLHttpRequest();
    request.open("GET", `https://content.guardianapis.com/search?api-key=387558af-231c-48fb-a0c0-6777ca4913b2`, false)
    request.send();
    var response = request.response
    var jsonText = JSON.parse(response);
    this._headlines = jsonText.response.results;
  };

  exports.HeadlineRequest = HeadlineRequest
})(this);
