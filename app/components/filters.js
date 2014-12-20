angular.module("systemick")
  .filter("skillFilter", function () {

    return function (data, propertyName, value) {
        
      var results = [];
      if (angular.isArray(data) && angular.isString(propertyName)) {
        for (var i=0; i<data.length; i++) {
          if (data[i][propertyName] == value) {
            results.push(data[i]);
            break;
          }
        }
        return results;
      }
      else {
        return data;
      }

    }

  });