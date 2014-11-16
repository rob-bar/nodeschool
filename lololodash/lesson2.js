var _ = require("lodash");

var worker = function(json) {
  return _.sortBy(json, function(obj) {
    return parseInt(obj.quantity);
  }).reverse();

  // return _.sortBy(json, "quantity").reverse(); GOOD SOLUTION

};

module.exports = worker;
