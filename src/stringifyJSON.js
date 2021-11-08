// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  // base cases
  if (obj === null) {
    return '' + obj;
  }
  if (typeof obj === 'number') {
    return '' + obj;
  }
  if (typeof obj === 'boolean') {
    return '' + obj;
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  //Arrays & Objects
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        return '[]';
      } else {
        var emptyArr = [];

        for (var x = 0; x < obj.length; x++) {
          emptyArr.push(stringifyJSON(obj[x]));
        }
        return '[' + emptyArr + ']';
      }
    } else {
      var objKeys = Object.keys(obj);

      var emptyArr1 = [];
      var emptyArr2 = [];
      var emptyArr3 = [];

      for (var y = 0; y < objKeys.length; y++) {
        emptyArr1.push('"' + objKeys[y] + '"');
      }
      for (var key in obj) {
        emptyArr2.push(stringifyJSON(obj[key]));
      }
      for (var i = 0; i < emptyArr1.length; i++) {
        emptyArr3.push(emptyArr1[i] + ':' + emptyArr2[i]);
        if (typeof(emptyArr3[i]) === 'function' || typeof(emptyArr2[i]) === 'undefined') {
          emptyArr3.pop();
        }
      }
      return '{' + emptyArr3 + '}';
    }
  }
};
