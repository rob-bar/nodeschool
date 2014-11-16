var _ = require("lodash");

var worker = function(json) {
  return _.where(json,{"active": true});
};

module.exports = worker;
