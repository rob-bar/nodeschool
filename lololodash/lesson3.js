var _ = require("lodash");

var worker = function(json) {
  return _.forEach(json, function(city, index, list) {
    var config = {
      small: {min: 0, max: 0.5},
      med: {min: 0.5, max: 1},
      big: {min: 1, max: Number.MAX_VALUE}
    };

    _.forEach(config, function(element, index, list) {
      if(element.min <= city.population && city.population < element.max) {
        city.size = index;
      }
    });

  });
};

module.exports = worker;


// SOLUTION
// 'use strict';

// var _ = require("lodash");

// var addsizetyp = function (item) {

//     _.forEach(item, function (value, key) {

//         if (value.population > 1) {
//             item[key].size = "big";
//         } else if (value.population > 0.5) {
//             item[key].size = "med";
//         } else {
//             item[key].size = "small";
//         }
//     });

//     return item;
// };

// module.exports = addsizetyp;
